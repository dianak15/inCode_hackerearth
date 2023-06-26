import { memo, SVGProps } from 'react';

const Line2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 53' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.78833 1.2749V51.7514'
      stroke='#C8C7CC'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeDasharray='4 4'
    />
  </svg>
);

const Memo = memo(Line2Icon);
export { Memo as Line2Icon };
