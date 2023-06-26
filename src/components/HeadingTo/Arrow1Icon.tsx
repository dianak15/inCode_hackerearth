import { memo, SVGProps } from 'react';

const Arrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M31.0607 1.06066C31.6464 0.474874 31.6464 -0.474874 31.0607 -1.06066L21.5147 -10.6066C20.9289 -11.1924 19.9792 -11.1924 19.3934 -10.6066C18.8076 -10.0208 18.8076 -9.07107 19.3934 -8.48528L27.8787 0L19.3934 8.48528C18.8076 9.07107 18.8076 10.0208 19.3934 10.6066C19.9792 11.1924 20.9289 11.1924 21.5147 10.6066L31.0607 1.06066ZM0 1.5H30V-1.5H0V1.5Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Arrow1Icon);
export { Memo as Arrow1Icon };
