import { memo, SVGProps } from 'react';

const Rectangle5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 275 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8C0 3.58172 3.58172 0 8 0H267C271.418 0 275 3.58172 275 8V36C275 40.4183 271.418 44 267 44H7.99999C3.58171 44 0 40.4183 0 36V8Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Rectangle5Icon);
export { Memo as Rectangle5Icon };
