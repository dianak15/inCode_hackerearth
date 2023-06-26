import { memo, SVGProps } from 'react';

const LineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 313 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.962241 1.95617H311.788' stroke='#EFEFEF' strokeLinecap='square' />
  </svg>
);

const Memo = memo(LineIcon);
export { Memo as LineIcon };
