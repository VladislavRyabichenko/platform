/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xs': { min: '475px' },
        xs: { min: '576px' },
        sm: { min: '640px' },
        md: { min: '768px' },
        tablet: { min: '834px' },
        lg: { min: '1024px' },
        xl: { min: '1280px' },
        desktop: { min: '1440px' },
        '2xl': { min: '1536px' },
        '3xl': { min: '1760px' },
        '4xl': { min: '1890px' },
        '5xl': { min: '2048px' }
      },
      colors: {
        brand: {
          primary: {
            main: '#3076FF',
            dark: '#2160DC',
            light: '#6E9FFF',
            pastel: '#D1E1FF',
            tint: '#EAF1FF'
          },
          danger: {
            main: '#F64786',
            dark: '#E93A6F',
            light: '#FD649B',
            pastel: '#FFC7CD',
            tint: '#FFEDF0'
          },
          warning: {
            main: '#F1B56E',
            dark: '#F2B007',
            light: '#F8DB46',
            pastel: '#FFF29B',
            tint: '#FFFCED'
          },
          success: {
            main: '#74CEB9',
            dark: '#5AC994',
            light: '#7CFFC4',
            pastel: '#EDFFF9',
            tint: '#EEFFF0'
          }
        },
        primary: {
          500: '#2160DC',
          600: '#1F51B9',
          700: '#1C4296',
          800: '#1A3474',
          900: '#172551',
          950: '#161D3F'
        },
        surface: {
          300: '#2C2D43',
          400: '#15162E',
          500: '#060721',

          light: {
            400: '#EAEAEF',
            500: '#F4F4F5'
          }
        },
        divider: {
          400: '#1F213D',
          500: '#2C2D43',

          light: {
            400: '#F0F0F5',
            500: '#DADADE'
          }
        },
        icon: {
          400: '#70717F',
          500: '#4C4D5F',

          light: {
            400: '#D8D8E0',
            500: '#999AA9'
          }
        },
        text: {
          100: '#DADADE',
          200: '#B4B5BC',
          300: '#8F8F9B',
          400: '#696A79',
          500: '#444558'
        },
        danger: {
          500: '#E93A6F',
          600: '#C13665',
          700: '#9A315A',
          800: '#722D50',
          900: '#4B2845',
          950: '#372640'
        },
        success: {
          500: '#5AC994',
          600: '#4FA882',
          700: '#448770',
          800: '#39665F',
          900: '#2E454D',
          950: '#283544'
        },
        warning: {
          500: '#F2B007',
          600: '#C99411',
          700: '#9F781C',
          800: '#765C26',
          900: '#4C4031',
          950: '#383236'
        },
        black: '#060721',
        white: '#FFFFFF'
      },
      fontSize: {
        h1: ['64px', { lineHeight: '72px', letterSpacing: '1px' }],
        h2: ['42px', { lineHeight: '56px', letterSpacing: '0.5px' }],
        h3: ['30px', { lineHeight: '40px' }],
        h4: ['24px', { lineHeight: '36px' }],
        bodylarge: ['20px', { lineHeight: '32px' }],
        bodymedium: ['16px', { lineHeight: '24px' }],
        bodysmall: ['14px', { lineHeight: '20px' }],
        caption: ['12px', { lineHeight: '16px', letterSpacing: '0.2px' }],
        captionSmall1: ['11px', { lineHeight: '14px', letterSpacing: '0.2px' }],
        captionSmall2: ['8px', { lineHeight: '12px', letterSpacing: '0.2px' }]
      },
      gridTemplateAreas: {
        'home-layout-desktop': [
          'trading-performance      trading-performance     trading-statistic',
          'cumulative               distribution            calendar-heatmap',
          'trade-evaluation-chart   trade-evaluation-chart  trade-evaluation'
        ],
        'home-layout-tablet': [
          'trading-performance      trading-performance',
          'cumulative               distribution',
          'trade-evaluation-chart   trade-evaluation-chart',
          'trading-statistic        calendar-heatmap',
          'trade-evaluation         .'
        ],
        'home-layout-mobile': [
          'trading-performance',
          'cumulative',
          'distribution',
          'trade-evaluation-chart',
          'trading-statistic',
          'calendar-heatmap',
          'trade-evaluation'
        ]
      }
      // gridTemplateColumns: {
      //   layout: 'auto auto auto'
      // },
      // gridTemplateRows: {
      //   layout: `auto
      //             auto
      //             auto`
      // }
    }
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
  variants: {
    gridTemplateAreas: ['responsive']
  }
}
