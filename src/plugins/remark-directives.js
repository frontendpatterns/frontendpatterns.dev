/**
 * Remark plugin that converts custom container directives into HTML-friendly nodes.
 * Handles :::tldr blocks and a custom :::tabs/::::tab syntax (including four-colon tab directives).
 */
export default function remarkDirectives() {
  return (tree) => {
    splitDirectiveParagraphs(tree);
    normalizeTabDirectives(tree);
    transformNode(tree);
  };
}

function splitDirectiveParagraphs(node) {
  if (!node || !Array.isArray(node.children)) {
    return;
  }

  const children = node.children;

  for (let index = 0; index < children.length; index += 1) {
    const child = children[index];

    if (child?.type === 'paragraph' || child?.type === 'heading') {
      const text = getNodeText(child);
      if (text.includes('\n')) {
        const lines = text
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter(Boolean);

        if (lines.length > 1 && lines.every((line) => /^:{3,}/.test(line))) {
          const replacementNodes = lines.map((line) => ({
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: line,
              },
            ],
          }));

          children.splice(index, 1, ...replacementNodes);
          index += replacementNodes.length - 1;
          continue;
        }
      }
    }

    splitDirectiveParagraphs(child);
  }
}

function normalizeTabDirectives(node) {
  if (!node || !Array.isArray(node.children)) {
    return;
  }

  const children = node.children;

  for (let index = 0; index < children.length; index += 1) {
    const child = children[index];

    if (isTabsStart(child)) {
      const result = extractTabs(children, index);
      if (result) {
        const { node: tabsNode, endIndex } = result;
        children.splice(index, endIndex - index + 1, tabsNode);
        // Reprocess the newly inserted node to catch nested structures.
        normalizeTabDirectives(tabsNode);
      }
      continue;
    }

    normalizeTabDirectives(child);
  }
}

function transformNode(node) {
  if (!node || typeof node !== 'object') {
    return;
  }

  if (node.type === 'containerDirective' && node.name) {
    const data = node.data || (node.data = {});
    const attributes = node.attributes || {};
    const properties = { ...attributes };

    const existingClass =
      typeof properties.class === 'string'
        ? properties.class.split(/\s+/).filter(Boolean)
        : Array.isArray(properties.class)
          ? properties.class.filter(Boolean)
          : [];

    const classes = new Set(existingClass);

    switch (node.name) {
      case 'tldr': {
        data.hName = 'aside';
        classes.add('tldr');
        break;
      }

      case 'tabs': {
        data.hName = 'div';
        classes.add('tab-group');
        classes.add('tabs');
        if (properties.name) {
          properties['data-tab-group'] = String(properties.name);
        }
        delete properties.name;
        break;
      }

      case 'tab': {
        data.hName = 'section';
        classes.add('tab-panel');
        classes.add('tab');
        const label = properties.label ?? properties.title ?? '';
        if (label) {
          properties['data-tab-label'] = String(label);
        }
        delete properties.label;
        delete properties.title;
        break;
      }

      default: {
        data.hName = 'div';
        classes.add(node.name);
      }
    }

    const classList = Array.from(classes).filter(Boolean);

    if (classList.length > 0) {
      properties.class = classList.join(' ');
    } else {
      delete properties.class;
    }

    data.hProperties = properties;
  }

  if (Array.isArray(node.children)) {
    node.children.forEach(transformNode);
  }
}

function extractTabs(siblings, startIndex) {
  const startNode = siblings[startIndex];
  const startInfo = parseDirectiveLine(startNode, { minColons: 3, expectedName: 'tabs' });
  if (!startInfo) {
    return null;
  }

  const tabsNode = {
    type: 'containerDirective',
    name: 'tabs',
    attributes: startInfo.attributes,
    children: [],
  };

  let index = startIndex + 1;
  let currentTab = null;

  while (index < siblings.length) {
    const current = siblings[index];

    if (isTabsEnd(current)) {
      return { node: tabsNode, endIndex: index };
    }

    if (isTabStart(current)) {
      const tabInfo = parseDirectiveLine(current, { minColons: 4, expectedName: 'tab' });
      if (!tabInfo) {
        index += 1;
        continue;
      }

      currentTab = {
        type: 'containerDirective',
        name: 'tab',
        attributes: tabInfo.attributes,
        children: [],
      };

      tabsNode.children.push(currentTab);
      index += 1;
      continue;
    }

    if (isTabEnd(current)) {
      currentTab = null;
      index += 1;
      continue;
    }

    if (currentTab) {
      currentTab.children.push(current);
    } else {
      tabsNode.children.push(current);
    }

    index += 1;
  }

  return null;
}

function parseDirectiveLine(node, { minColons, expectedName }) {
  if (!isDirectiveContainer(node)) {
    return null;
  }

  const text = getNodeText(node);
  const [firstLine] = text.split(/\r?\n/, 1);
  const pattern = new RegExp(`^:{${minColons},}\\s*${expectedName}\\b(.*)$`, 'i');
  const match = firstLine ? firstLine.match(pattern) : null;
  if (!match) {
    return null;
  }

  const attributes = extractAttributes(match[1] || '');
  return { attributes };
}

function extractAttributes(rest) {
  const attributes = {};
  const attributePattern = /([a-zA-Z0-9_-]+)\s*=\s*"(.*?)"/g;
  let match = attributePattern.exec(rest);
  while (match) {
    attributes[match[1]] = match[2];
    match = attributePattern.exec(rest);
  }
  return attributes;
}

function isTabsStart(node) {
  return Boolean(parseDirectiveLine(node, { minColons: 3, expectedName: 'tabs' }));
}

function isTabsEnd(node) {
  return isDirectiveCloser(node, 3);
}

function isTabStart(node) {
  return Boolean(parseDirectiveLine(node, { minColons: 4, expectedName: 'tab' }));
}

function isTabEnd(node) {
  return isDirectiveCloser(node, 4);
}

function isDirectiveCloser(node, minColons) {
  if (!isDirectiveContainer(node)) {
    return false;
  }
  const text = getNodeText(node);
  const [firstLine] = text.split(/\r?\n/, 1);
  const pattern = new RegExp(`^:{${minColons}}\\s*$`);
  return pattern.test((firstLine || '').trim());
}

function isDirectiveContainer(node) {
  return node?.type === 'paragraph' || node?.type === 'heading';
}

function getNodeText(node) {
  if (!node || !node.children) {
    return '';
  }

  return node.children
    .map((child) => {
      if (child.type === 'text' || child.type === 'inlineCode') {
        return child.value;
      }
      return '';
    })
    .join('')
    .trim();
}
