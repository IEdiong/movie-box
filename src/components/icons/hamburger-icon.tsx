import { Icon } from '@/utils/chakra-components';
import { IconProps } from '@chakra-ui/react';

const HamburgerIcon = (props: IconProps) => (
  <Icon width='36' height='36' viewBox='0 0 36 36' fill='none' {...props}>
    <circle cx='18' cy='18' r='18' fill='#BE123C' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.59998 14.4C9.59998 13.7373 10.1372 13.2 10.8 13.2H25.2C25.8627 13.2 26.4 13.7373 26.4 14.4C26.4 15.0628 25.8627 15.6 25.2 15.6H10.8C10.1372 15.6 9.59998 15.0628 9.59998 14.4Z'
      fill='white'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.59998 21.6C9.59998 20.9373 10.1372 20.4 10.8 20.4H25.2C25.8627 20.4 26.4 20.9373 26.4 21.6C26.4 22.2628 25.8627 22.8 25.2 22.8H10.8C10.1372 22.8 9.59998 22.2628 9.59998 21.6Z'
      fill='white'
    />
  </Icon>
);

export default HamburgerIcon;
