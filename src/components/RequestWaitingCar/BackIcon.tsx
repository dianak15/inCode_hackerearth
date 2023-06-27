import { memo, SVGProps } from 'react';

const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.12267 11L14.4593 2.6826C15.1482 2.06892 15.1482 1.07394 14.4593 0.460261C13.7705 -0.15342 12.6535 -0.15342 11.9647 0.460261L1.38066 9.88883C0.691777 10.5025 0.691777 11.4975 1.38066 12.1112L11.9647 21.5397C12.6535 22.1534 13.7705 22.1534 14.4593 21.5397C15.1482 20.9261 15.1482 19.9311 14.4593 19.3174L5.12267 11Z'
      fill='#C8C7CC'
    />
  </svg>
);

const Memo = memo(BackIcon);
export { Memo as BackIcon };
