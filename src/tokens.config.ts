import { defineTheme } from 'pinceau'
import type { PinceauTheme, PropertyValue } from 'pinceau'

export default defineTheme({
  media: {
    '$schema': {
      title: 'Your website media queries.',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType color',
        '@studioIcon material-symbols:screenshot-monitor-outline-rounded',
      ],
    },
    'xs': '(min-width: 475px)',
    'sm': '(min-width: 640px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 1024px)',
    'xl': '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
    'rm': '(prefers-reduced-motion: reduce)',
    'landscape': 'only screen and (orientation: landscape)',
    'portrait': 'only screen and (orientation: portrait)',
  },

  color: {
    $schema: {
      title: 'Your website color palette.',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType color',
        '@studioIcon ph:palette',
      ],
    },
    white: '#ffffff',
    black: '#0E0D0D',
    gray: {
      50: '#FBFBFB',
      100: '#F3F3F2',
      200: '#ECEBE8',
      300: '#DBD9D3',
      400: '#ADA9A4',
      500: '#97948F',
      600: '#3D3B38',
      700: '#292724',
      800: '#1C1B19',
      900: '#121110',
    },
    green: {
      50: '#ECFFF7',
      100: '#DBFFF0',
      200: '#C0FFE4',
      300: '#86FBCB',
      400: '#3CEEA5',
      500: '#0DD885',
      600: '#039B5A',
      700: '#01492C',
      800: '#002817',
      900: '#00190F',
    },
    yellow: {
      50: '#FFFCEE',
      100: '#FFF7D9',
      200: '#FFF3C0',
      300: '#FFE372',
      400: '#FFDC4E',
      500: '#FBCA05',
      600: '#AB8A07',
      700: '#463801',
      800: '#292100',
      900: '#1B1500',
    },
    orange: {
      50: '#FFF7F2',
      100: '#FFEFE5',
      200: '#FFE5D7',
      300: '#FDAC7E',
      400: '#FC8E51',
      500: '#FA630E',
      600: '#7E3004',
      700: '#3F1802',
      800: '#2D1102',
      900: '#1A0A01',
    },
    pumpkin: {
      50: '#ffe9d9',
      100: '#ffd3b3',
      200: '#ffbd8d',
      300: '#ffa666',
      400: '#ff9040',
      500: '#ff7a1a',
      600: '#e15e00',
      700: '#a94700',
      800: '#702f00',
      900: '#381800',
    },
    red: {
      50: '#FFF9F8',
      100: '#FFF0EC',
      200: '#FFE6E1',
      300: '#FFA692',
      400: '#FF7353',
      500: '#FF3B10',
      600: '#AD2203',
      700: '#550F00',
      800: '#340A01',
      900: '#1C0301',
    },
    pear: {
      50: '#f7f8dc',
      100: '#eff0ba',
      200: '#e8e997',
      300: '#e0e274',
      400: '#d8da52',
      500: '#d0d32f',
      600: '#a8aa24',
      700: '#7e801b',
      800: '#545512',
      900: '#2a2b09',
    },
    teal: {
      50: '#d7faf8',
      100: '#aff4f0',
      200: '#87efe9',
      300: '#5fe9e1',
      400: '#36e4da',
      500: '#1cd1c6',
      600: '#16a79e',
      700: '#117d77',
      800: '#0b544f',
      900: '#062a28',
    },
    lightblue: {
      50: '#F1FCFF',
      100: '#DCF7FF',
      200: '#C5F2FF',
      300: '#82E3FF',
      400: '#55E1FF',
      500: '#1AD6FF',
      600: '#0893B1',
      700: '#013858',
      800: '#00232B',
      900: '#001A1F',
    },
    blue: {
      50: '#F2FAFF',
      100: '#E2F4FF',
      200: '#D0EEFF',
      300: '#A1DDFF',
      400: '#64C7FF',
      500: '#1AADFF',
      600: '#01659E',
      700: '#013858',
      800: '#002235',
      900: '#00131D',
    },
    indigoblue: {
      50: '#d9e5ff',
      100: '#b3cbff',
      200: '#8db0ff',
      300: '#6696ff',
      400: '#407cff',
      500: '#1a62ff',
      600: '#0047e1',
      700: '#0035a9',
      800: '#002370',
      900: '#001238',
    },
    royalblue: {
      50: '#dfdbfb',
      100: '#c0b7f7',
      200: '#a093f3',
      300: '#806ff0',
      400: '#614bec',
      500: '#4127e8',
      600: '#2c15c4',
      700: '#211093',
      800: '#160a62',
      900: '#0b0531',
    },
    violet: {
      50: '#ead9ff',
      100: '#d5b3ff',
      200: '#c08dff',
      300: '#ab66ff',
      400: '#9640ff',
      500: '#811aff',
      600: '#6500e1',
      700: '#4c00a9',
      800: '#330070',
      900: '#190038',
    },
    purple: {
      50: '#F8F5FF',
      100: '#F1ECFF',
      200: '#E5DCFF',
      300: '#A589F9',
      400: '#8961FD',
      500: '#6B39FA',
      600: '#370DAD',
      700: '#200273',
      800: '#14014A',
      900: '#080020',
    },
    pink: {
      50: '#ffd9f2',
      100: '#ffb3e5',
      200: '#ff8dd8',
      300: '#ff66cc',
      400: '#ff40bf',
      500: '#ff1ab2',
      600: '#e10095',
      700: '#a90070',
      800: '#70004b',
      900: '#380025',
    },
    ruby: {
      50: '#ffd9e4',
      100: '#ffb3c9',
      200: '#ff8dae',
      300: '#ff6694',
      400: '#ff4079',
      500: '#ff1a5e',
      600: '#e10043',
      700: '#a90032',
      800: '#700021',
      900: '#380011',
    },
  },

  width: {
    $schema: {
      title: 'Your website screen sizings.',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType size',
        '@studioIcon ph:ruler',
      ],
    },
    screen: '100vw',
  },
  height: {
    $schema: {
      title: 'Your website screen sizings.',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType size',
        '@studioIcon ph:ruler',
      ],
    },
    screen: '100vh',
  },

  shadow: {
    '$schema': {
      title: 'Your website shadows.',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType shadow',
        '@studioIcon mdi:box-shadow',
      ],
    },
    'xs': '0px 1px 2px 0px #000000',
    'sm': '0px 1px 3px 0px #000000, 0px 1px 2px -1px #000000',
    'md': '0px 4px 6px -1px #000000, 0px 2px 4px -2px #000000',
    'lg': '0px 10px 15px -3px #000000, 0px 4px 6px -4px #000000',
    'xl': '0px 20px 25px -5px {color.gray.400}, 0px 8px 10px -6px #000000',
    '2xl': '0px 25px 50px -12px {color.gray.900}',
    'none': '0px 0px 0px 0px transparent',
  },

  radii: {
    '$schema': {
      title: 'Your website border radiuses.',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType size',
        '@studioIcon material-symbols:rounded-corner',
      ],
    },
    'none': '0px',
    '4xs': '2px',
    '3xs': '4px',
    '2xs': '6px',
    'xs': '8px',
    'sm': '10px',
    'md': '12px',
    'lg': '14px',
    'xl': '16px',
    '2xl': '18px',
    '3xl': '20px',
    '4xl': '24px',
    '5xl': '28px',
    '6xl': '32px',
    'full': '9999px',
  },

  size: {
    '$schema': {
      title: 'Your website sizings.',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType size',
        '@studioIcon ph:ruler',
      ],
    },
    '0': '0px',
    '2': '2px',
    '4': '4px',
    '6': '6px',
    '8': '8px',
    '12': '12px',
    '16': '16px',
    '20': '20px',
    '24': '24px',
    '32': '32px',
    '40': '40px',
    '48': '48px',
    '56': '56px',
    '64': '64px',
    '80': '80px',
    '104': '104px',
    '200': '200px',
    'xs': '20rem',
    'sm': '24rem',
    'md': '28rem',
    'lg': '32rem',
    'xl': '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    'full': '100%',
  },

  space: {
    $schema: {
      title: 'Your website spacings.',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType size',
        '@studioIcon ph:ruler',
      ],
    },
    0: '0px',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
    px: '1px',
    rem: {
      125: '0.125rem',
      375: '0.375rem',
      625: '0.625rem',
      875: '0.875rem',
    },
  },

  borderWidth: {
    $schema: {
      title: 'Your website border widths.',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType size',
        '@studioIcon material-symbols:border-all-outline-rounded',
      ],
    },
    noBorder: '0',
    sm: '1px',
    md: '2px',
    lg: '3px',
  },

  opacity: {
    $schema: {
      title: 'Your website opacities.',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType opacity',
        '@studioIcon material-symbols:opacity',
      ],
    },
    noOpacity: '0',
    bright: '0.1',
    light: '0.15',
    soft: '0.3',
    medium: '0.5',
    high: '0.8',
    total: '1',
  },

  font: {
    $schema: {
      title: 'Your website fonts',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType font',
        '@studioIcon material-symbols:font-download-rounded',
      ],
    },
    sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    serif: 'ui-serif, Georgia, Cambria, Times New Roman, Times, serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  },
  fontWeight: {
    $schema: {
      title: 'Your website font weights.',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType font-weight',
        '@studioIcon radix-icons:font-style',
      ],
    },
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  fontSize: {
    '$schema': {
      title: 'Your website font sizes.',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType font-size',
        '@studioIcon radix-icons:font-style',
      ],
    },
    'xs': '0.75rem',
    'sm': '0.875rem',
    'base': '1rem',
    'lg': '1.125rem',
    'xl': '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  letterSpacing: {
    $schema: {
      title: 'Your website letter spacings.',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType letter-spacing',
        '@studioIcon fluent:font-space-tracking-out-24-filled',
      ],
    },
    tighter: '-0.04em',
    tight: '-0.02em',
    normal: '0em',
    wide: '0.02em',
    wider: '0.04em',
    widest: '0.08em',
  },
  lead: {
    $schema: {
      title: 'Your website line heights.',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType size',
        '@studioIcon icon-park-outline:auto-line-height',
      ],
    },
    1: '.025rem',
    2: '.5rem',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  text: {
    '$schema': {
      title: 'Your website text scales.',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType size',
        '@studioIcon material-symbols:format-size-rounded',
      ],
    },
    'xs': {
      fontSize: '{fontSize.xs}',
      lineHeight: '{lead.4}',
    },
    'sm': {
      fontSize: '{fontSize.sm}',
      lineHeight: '{lead.5}',
    },
    'base': {
      fontSize: '{fontSize.base}',
      lineHeight: '{lead.6}',
    },
    'lg': {
      fontSize: '{fontSize.lg}',
      lineHeight: '{lead.7}',
    },
    'xl': {
      fontSize: '{fontSize.xl}',
      lineHeight: '{lead.7}',
    },
    '2xl': {
      fontSize: '{fontSize.2xl}',
      lineHeight: '{lead.8}',
    },
    '3xl': {
      fontSize: '{fontSize.3xl}',
      lineHeight: '{lead.9}',
    },
    '4xl': {
      fontSize: '{fontSize.4xl}',
      lineHeight: '{lead.10}',
    },
    '5xl': {
      fontSize: '{fontSize.5xl}',
      lineHeight: '{lead.none}',
    },
    '6xl': {
      fontSize: '{fontSize.6xl}',
      lineHeight: '{lead.none}',
    },
  },

  ease: {
    $schema: {},
    linear: 'cubic-bezier(0, 0, 1, 1)',
    default: {
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    sine: {
      in: 'cubic-bezier(0.12, 0, 0.39, 0)',
      out: 'cubic-bezier(0.61, 1, 0.88, 1)',
      inOut: 'cubic-bezier(0.37, 0, 0.63, 1)',
    },
    quad: {
      in: 'cubic-bezier(0.11, 0, 0.5, 0)',
      out: 'cubic-bezier(0.5, 1, 0.89, 1)',
      inOut: 'cubic-bezier(0.45, 0, 0.55, 1)',
    },
    cubic: {
      in: 'cubic-bezier(0.32, 0, 0.67, 0)',
      out: 'cubic-bezier(0.33, 1, 0.68, 1)',
      inOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
    },
    quart: {
      in: 'cubic-bezier(0.5, 0, 0.75, 0)',
      out: 'cubic-bezier(0.25, 1, 0.5, 1)',
      inOut: 'cubic-bezier(0.76, 0, 0.24, 1)',
    },
    quint: {
      in: 'cubic-bezier(0.64, 0, 0.78, 0)',
      out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      inOut: 'cubic-bezier(0.83, 0, 0.17, 1)',
    },
    expo: {
      in: 'cubic-bezier(0.7, 0, 0.84, 0)',
      out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      inOut: 'cubic-bezier(0.87, 0, 0.13, 1)',
    },
    circ: {
      in: 'cubic-bezier(0.55, 0, 1, 0.45)',
      out: 'cubic-bezier(0, 0.55, 0.45, 1)',
      inOut: 'cubic-bezier(0.85, 0, 0.15, 1)',
    },
    back: {
      in: 'cubic-bezier(0.36, 0, 0.66, -0.56)',
      out: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      inOut: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    },
  },

  utils: {
    my: (value: PropertyValue<'margin'>) => {
      return {
        marginTop: value,
        marginBottom: value,
      }
    },
    mx: (value: PropertyValue<'margin'>) => {
      return {
        marginLeft: value,
        marginRight: value,
      }
    },
    py: (value: PropertyValue<'margin'>) => {
      return {
        paddingTop: value,
        paddingBottom: value,
      }
    },
    px: (value: PropertyValue<'margin'>) => {
      return {
        paddingLeft: value,
        paddingRight: value,
      }
    },
    truncate: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    } as any,
    lineClamp: (lines: number | string) => ({
      'overflow': 'hidden',
      'display': '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': lines,
    }) as any,
    text: (size: keyof PinceauTheme['text']) => ({
      fontSize: `{text.${size}.fontSize}`,
      lineHeight: `{text.${size}.lineHeight}`,
    }),
    gradientText: (gradient: string) => ({
      '-webkit-text-fill-color': 'transparent',
      'backgroundImage': gradient,
      '-webkit-background-clip': 'text',
      'backgroundClip': 'text',
    }),
  },
})
