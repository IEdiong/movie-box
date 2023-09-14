import { Icon } from '@/utils/chakra-components';
import { IconProps } from '@chakra-ui/react';

const FavoriteIcon = (props: IconProps) => (
  <Icon width="30" height="30" viewBox="0 0 30 30" fill="none" {...props}>
    <g filter="url(#filter0_b_2820_401)">
      <ellipse
        cx="15"
        cy="15.1842"
        rx="15"
        ry="14.6053"
        fill="#F3F4F6"
        fillOpacity="0.5"
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.17157 10.4828C9.73367 8.96185 12.2663 8.96185 13.8284 10.4828L15 11.6236L16.1716 10.4828C17.7337 8.96185 20.2663 8.96185 21.8284 10.4828C23.3905 12.0038 23.3905 14.4698 21.8284 15.9908L15 22.6396L8.17157 15.9908C6.60948 14.4698 6.60948 12.0038 8.17157 10.4828Z"
      fill="#D1D5DB"
    />
    <defs>
      <filter
        id="filter0_b_2820_401"
        x="-2"
        y="-1.42105"
        width="34"
        height="33.2105"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_2820_401"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_2820_401"
          result="shape"
        />
      </filter>
    </defs>
  </Icon>
);

export default FavoriteIcon;
