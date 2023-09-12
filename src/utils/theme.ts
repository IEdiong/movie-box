import { extendTheme } from '@chakra-ui/react';
import Heading from './heading';
import Container from './container';

// Colors
const colors = {
  mdb: {
    rose: {
      700: '#BE123C',
    },
    gray: {
      500: '#6B7280',
      900: '#111827',
    },
    white: '#FFFFFF',
    black: {
      300: '#0E0E0E',
      500: '#101010',
      900: '#000000',
    },
  },
};

// Container Size
const sizes = {
  container: {
    sm: '689px',
    md: '1110px',
    lg: '1244px',
  },
};

// Breakpoint Size
const breakpoints = {
  base: '0em',
  sm: '46em', // tablet from 736px
  md: '64em', // desktop from 1024px
  lg: '90em', // desktop from 1440px
};

export const theme = extendTheme({
  colors,
  sizes,
  breakpoints,
  components: {
    Heading,
    Container,
  },
  config: {
    cssVarPrefix: 'mdb',
  },
});
