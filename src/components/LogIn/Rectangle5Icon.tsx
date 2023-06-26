import { memo, SVGProps } from 'react';

const Rectangle5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 112 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8C0 3.58172 3.58172 0 8 0H104C108.418 0 112 3.58172 112 8V36C112 40.4183 108.418 44 104 44H8C3.58172 44 0 40.4183 0 36V8Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Rectangle5Icon);
export { Memo as Rectangle5Icon };
