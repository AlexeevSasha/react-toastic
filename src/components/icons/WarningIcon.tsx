import { IconT } from '../../interfaces/icon';

export const WarningIcon = ({ color }: IconT) => {
  return (
    <svg
      width='24px'
      height='24px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13 14H11V9H13V14ZM13 18H11V16H13V18ZM1 21H23L12 2L1 21Z'
        fill={color || '#393A37'}
      />
    </svg>
  );
};
