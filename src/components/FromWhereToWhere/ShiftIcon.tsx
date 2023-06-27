import { memo, SVGProps } from 'react';

const ShiftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22.0448 9.22489H17.1091V12.4165C17.1091 12.4809 17.1091 12.5398 17.1091 12.6014C17.1091 12.655 17.1091 12.706 17.106 12.7596C17.1038 12.8745 17.0893 12.9891 17.0625 13.1026C17.0333 13.2153 16.9805 13.3245 16.9057 13.4268C16.8291 13.5291 16.7291 13.6223 16.6094 13.7028C16.4892 13.7834 16.3519 13.8512 16.2022 13.9038C16.0506 13.9543 15.8896 13.9904 15.7237 14.011C15.5573 14.0289 15.3893 14.0387 15.2209 14.0405C15.1425 14.0405 15.0665 14.0432 14.9897 14.0432H8.6403C8.56192 14.0432 8.48628 14.0405 8.40907 14.0405C8.24066 14.0387 8.07265 14.0289 7.90625 14.011C7.74048 13.9904 7.57961 13.9543 7.42812 13.9038C7.27842 13.8512 7.14115 13.7834 7.02092 13.7028C6.90117 13.6223 6.80113 13.5291 6.72464 13.4268C6.64984 13.3245 6.59704 13.2153 6.56787 13.1026C6.54091 12.9891 6.52624 12.8745 6.52398 12.7596C6.52398 12.706 6.52084 12.655 6.52084 12.6014C6.52084 12.5398 6.52084 12.4809 6.52084 12.4165V9.22489H1.50712C0.999991 9.22489 0.349418 8.47723 0.958448 8.06186C1.47616 7.7108 9.61302 2.1636 11.3159 1.00861C11.441 0.903459 11.6178 0.832984 11.8132 0.810303H11.8265C11.9956 0.816573 12.1526 0.872205 12.2576 0.963052C13.9605 2.11805 22.1252 7.7108 22.6433 8.06186C23.2527 8.47723 22.7424 9.22489 22.0448 9.22489Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(ShiftIcon);
export { Memo as ShiftIcon };