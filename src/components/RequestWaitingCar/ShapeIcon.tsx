import { memo, SVGProps } from 'react';

const ShapeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 63 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M55.5694 0.655518C58.1743 -0.233197 61.4512 -0.121905 62.4133 1.58598C63.3755 3.29387 62.3154 5.48816 60.3408 6.60559L34.3604 14.58C32.0513 15.315 30.8895 15.2812 28.6039 14.58L2.62885 6.60559C0.830826 5.66321 -0.780001 3.79647 0.407627 1.58598C1.59525 -0.624512 5.19501 -0.107953 7.47583 0.655518L31.4828 8.28898L55.5694 0.655518Z'
      fill='#9B9B9B'
    />
  </svg>
);

const Memo = memo(ShapeIcon);
export { Memo as ShapeIcon };
