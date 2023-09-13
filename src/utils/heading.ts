import { defineStyleConfig } from '@chakra-ui/react';

const Heading = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    fontWeight: 'bold',
    fontFamily: 'inherit',
    lineHeight: 'normal',
  },
  // Styles for the visual style variations
  variants: {
    h1: {
      fontSize: '5xl',
      lineHeight: '56px',
    },
    'h1-sm': {
      fontSize: '4xl',
      lineHeight: '40px',
    },
    h2: {
      fontSize: '4xl',
      lineHeight: 'normal',
      fontStyle: 'normal',
    },
    'h2-sm': {
      fontSize: 'xl',
    },
    h3: {
      fontSize: 'lg',
    },
  },
  // The default `size` or `variant` values
  defaultProps: {
    variant: 'h2',
  },
});

export default Heading;
