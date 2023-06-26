import { memo, SVGProps } from 'react';

const Ellipse4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 51 50' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={25.2288} cy={24.502} rx={25.2288} ry={24.502} fill='#4CE5B1' />
  </svg>
);

const Memo = memo(Ellipse4Icon);
export { Memo as Ellipse4Icon };
