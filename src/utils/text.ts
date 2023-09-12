import { defineStyleConfig } from '@chakra-ui/react';

const Text = defineStyleConfig({
  // Styles for the base style

  // Styles for the visual style variations
  variants: {
    xsmall: {
      fontSize: 'xs',
      fontWeight: 'normal',
      lineHeight: '12px',
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
});

export default Text;
