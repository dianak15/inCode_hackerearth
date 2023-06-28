import { memo, SVGProps } from 'react';

const Rectangle3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 275 56' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8C0 3.58172 3.58172 0 8 0H267C271.418 0 275 3.58172 275 8V48C275 52.4183 271.418 56 267 56H7.99999C3.58171 56 0 52.4183 0 48V8Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Rectangle3Icon);
export { Memo as Rectangle3Icon };
