import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 202 202' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={101} cy={101} r={101} fill='#A610DB' />
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
