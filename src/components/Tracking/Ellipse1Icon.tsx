import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 153 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={76.5} cy={16} rx={76.5} ry={16} fill='#F52D56' />
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
