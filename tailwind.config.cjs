module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.{html,svg}',
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.slate.700'),
            '--tw-prose-headings': theme('colors.slate.900'),
            '--tw-prose-links': theme('colors.sky.700'),
            '--tw-prose-bold': theme('colors.slate.900'),
            '--tw-prose-code': theme('colors.slate.900'),
            '--tw-prose-quotes': theme('colors.slate.900'),
            '--tw-prose-hr': theme('colors.slate.200'),
            a: {
              fontWeight: theme('fontWeight.medium'),
              textDecoration: 'none',
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.sky.200'),
              transitionProperty: theme('transitionProperty.colors'),
              transitionDuration: theme('transitionDuration.150'),
              transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
              '&:hover': {
                color: theme('colors.sky.800'),
                borderBottomColor: theme('colors.sky.400'),
              },
            },
            code: {
              backgroundColor: theme('colors.slate.100'),
              borderRadius: theme('borderRadius.sm'),
              padding: '0.125rem 0.375rem',
              fontWeight: theme('fontWeight.medium'),
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: 0,
              fontWeight: theme('fontWeight.normal'),
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.slate.300'),
            '--tw-prose-headings': theme('colors.slate.100'),
            '--tw-prose-links': theme('colors.sky.300'),
            '--tw-prose-bold': theme('colors.slate.100'),
            '--tw-prose-code': theme('colors.slate.100'),
            '--tw-prose-quotes': theme('colors.slate.100'),
            '--tw-prose-hr': theme('colors.slate.800'),
            a: {
              borderBottomColor: theme('colors.sky.800'),
              '&:hover': {
                color: theme('colors.sky.200'),
                borderBottomColor: theme('colors.sky.600'),
              },
            },
            code: {
              backgroundColor: theme('colors.slate.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
