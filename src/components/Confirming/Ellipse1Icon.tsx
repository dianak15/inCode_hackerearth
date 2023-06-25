import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 253 247' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={126.5} cy={123.5} rx={126.5} ry={123.5} fill='#2B7132' fillOpacity={0.9} />
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
