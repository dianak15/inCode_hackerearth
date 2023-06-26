import { memo, SVGProps } from 'react';

const Rectangle6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 354 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8C0 3.58172 3.58172 0 8 0H346C350.418 0 354 3.58172 354 8V36C354 40.4183 350.418 44 346 44H8C3.58172 44 0 40.4183 0 36V8Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Rectangle6Icon);
export { Memo as Rectangle6Icon };
