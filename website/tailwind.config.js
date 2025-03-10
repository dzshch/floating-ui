const colors = require('tailwindcss/colors');

const GRAY = {
  1000: '#18191f',
  900: '#1F2028',
  800: '#272935',
  700: '#353849',
  600: '#575969',

  200: '#BFC3D9',
  150: '#B0B2C3',
  100: '#dcdfec',
  75: '#f1f3f7',
  50: '#fff',
};

module.exports = {
  plugins: [require('@tailwindcss/typography')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: ({theme}) => ({
        lg: {
          css: {
            h1: {
              fontSize: '3.5rem',
            },
            'h2 > a': {
              fontSize: '2rem',
            },
            pre: {
              fontSize: '1.05rem',
              lineHeight: '2.1',
            },
            img: {
              margin: '0',
            },
          },
        },
        md: {
          css: {
            fontSize: '1.125rem',
            h1: {
              fontSize: '3rem',
            },
            pre: {
              lineHeight: '2.1',
            },
            img: {
              margin: '0',
            },
            '.card': {
              maxWidth: 'calc(50% - 5px)',
            },
          },
        },
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray[800]'),
            '--tw-prose-invert-body': theme('colors.gray[150]'),
            '--tw-prose-bullets': theme('colors.gray[800]'),
            '--tw-prose-invert-bullets': theme(
              'colors.gray[150]'
            ),
            img: {
              margin: '0',
            },
            '.card': {
              maxWidth: '100%',
            },
            fontSize: '1rem',
            maxWidth: '70ch',
            pre: {
              color: '#cddbf7',
              padding: '1rem 1.5rem',
              lineHeight: '2',
              backgroundColor: '#282834',
              '> code': {
                display: 'grid',
              },
              '.line': {
                borderLeft: '2px solid transparent',
                margin: '0 -1.5rem',
                padding: '0 1.5rem',
              },
              '.line.line--highlighted': {
                borderLeftColor: colors.rose[400],
                backgroundColor: '#3b3547',
              },
              span: {
                position: 'relative',
                zIndex: '1',
              },
              '.word': {
                backgroundColor: 'rgba(200,200,255,0.2)',
                padding: '0.2rem 0',
                borderRadius: '0.25rem',
                boxShadow: '0 0 0 1px rgb(200 200 255 / 20%)',
                zIndex: '0',
              },
            },
            h1: {
              display: 'inline',
              lineHeight: '1.1',
              wordBreak: 'break-word',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize: '2.25rem',
            },
            h2: {
              wordBreak: 'break-word',
              '> a': {
                textDecoration: 'underline',
                textDecorationColor: 'transparent',
                textUnderlineOffset: '8px',
                textDecorationThickness: '2px',
                transition:
                  'color 0.2s ease, text-decoration 0.2s ease',
              },
            },
            h3: {
              wordBreak: 'break-word',
              '> a': {
                textDecoration: 'underline',
                textDecorationColor: 'transparent',
                textUnderlineOffset: '8px',
                textDecorationThickness: '2px',
                transition:
                  'color 0.2s ease, text-decoration 0.2s ease',
              },
            },
            h4: {
              '> a': {
                textDecoration: 'underline',
                textDecorationColor: 'transparent',
                textUnderlineOffset: '8px',
                textDecorationThickness: '2px',
                transition:
                  'color 0.2s ease, text-decoration 0.2s ease',
              },
            },
            code: {
              color: '#c7d2f5',
              fontWeight: '500',
              '&::before': {
                display: 'none',
              },
              '&::after': {
                display: 'none',
              },
            },
            ':not(pre) > code': {
              borderRadius: '0.25rem',
              padding: '0.375rem 0.5rem',
              backgroundColor: '#30303e',
            },
            'blockquote p:first-of-type::before': {
              display: 'none',
            },
          },
        },
      }),
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        gray: GRAY,
      },
      zIndex: {
        '-1': '-1',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(circle at 50% 10%, var(--tw-gradient-stops))',
      },
      inset: {
        '-32': '-128px',
      },
      height: {
        128: '32rem',
      },
    },
  },
};
