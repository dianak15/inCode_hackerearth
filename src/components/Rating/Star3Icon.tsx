import { memo, SVGProps } from 'react';

const Star3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14 0L17.1432 8.98278H27.3148L19.0858 14.5344L22.229 23.5172L14 17.9656L5.77101 23.5172L8.9142 14.5344L0.685208 8.98278H10.8568L14 0Z'
      fill='#18398F'
      fillOpacity={0.8}
    />
  </svg>
);

const Memo = memo(Star3Icon);
export { Memo as Star3Icon };
