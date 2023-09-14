import { Icon } from '@/utils/chakra-components';
import { IconProps } from '@chakra-ui/react';

const ChevronRightIcon = (props: IconProps) => (
  <Icon width="20" height="21" viewBox="0 0 20 21" fill="none" {...props}>
    <path
      d="M7.5 4.66668L13.3333 10.5L7.5 16.3333"
      stroke="#B91C1C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default ChevronRightIcon;
