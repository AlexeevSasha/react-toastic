import { IconT } from '../../interfaces/icon';

export const InfoIcon = ({ color }: IconT) => {
  return (
    <svg
      width='24px'
      height='24px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 2C6.47768 2 2 6.47768 2 12C2 17.5223 6.47768 22 12 22C17.5223 22 22 17.5223 22 12C22 6.47768 17.5223 2 12 2ZM12.7143 16.8214C12.7143 16.9196 12.6339 17 12.5357 17H11.4643C11.3661 17 11.2857 16.9196 11.2857 16.8214V10.75C11.2857 10.6518 11.3661 10.5714 11.4643 10.5714H12.5357C12.6339 10.5714 12.7143 10.6518 12.7143 10.75V16.8214ZM12 9.14286C11.7196 9.13713 11.4527 9.02174 11.2564 8.82143C11.0601 8.62112 10.9502 8.35186 10.9502 8.07143C10.9502 7.791 11.0601 7.52174 11.2564 7.32143C11.4527 7.12112 11.7196 7.00572 12 7C12.2804 7.00572 12.5473 7.12112 12.7436 7.32143C12.9399 7.52174 13.0498 7.791 13.0498 8.07143C13.0498 8.35186 12.9399 8.62112 12.7436 8.82143C12.5473 9.02174 12.2804 9.13713 12 9.14286Z'
        fill={color || '#393A37'}
      />
    </svg>
  );
};