import { memo, SVGProps } from 'react';

const Rectangle3Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 94 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8C0 3.58172 3.58172 0 8 0H86C90.4183 0 94 3.58172 94 8V37C94 41.4183 90.4183 45 86 45H8C3.58172 45 0 41.4183 0 37V8Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Rectangle3Icon2);
export { Memo as Rectangle3Icon2 };
