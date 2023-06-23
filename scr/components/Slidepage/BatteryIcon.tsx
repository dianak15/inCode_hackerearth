import { memo, SVGProps } from 'react';

const BatteryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect opacity={0.35} width={26.8693} height={11.3333} rx={2.66667} stroke='black' />
    <path
      opacity={0.4}
      d='M28.0907 3.66667V7.66667C29.0735 7.32789 29.7126 6.5398 29.7126 5.66667C29.7126 4.79353 29.0735 4.00544 28.0907 3.66667'
      fill='black'
    />
    <rect x={2.44266} y={2} width={21.984} height={7.33333} rx={1.33333} fill='black' />
  </svg>
);

const Memo = memo(BatteryIcon);
export { Memo as BatteryIcon };
