import { memo, SVGProps } from 'react';

const LeftAccessoryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.53714 20.0827L0.292152 10.9458C-0.097384 10.5612 -0.097384 9.93981 0.292152 9.5542L9.53714 0.417333C10.0995 -0.139111 11.0144 -0.139111 11.5777 0.417333C12.14 0.973776 12.14 1.87687 11.5777 2.43332L3.66913 10.2505L11.5777 18.0657C12.14 18.6231 12.14 19.5262 11.5777 20.0827C11.0144 20.6391 10.0995 20.6391 9.53714 20.0827'
      fill='white'
    />
  </svg>
);

const Memo = memo(LeftAccessoryIcon);
export { Memo as LeftAccessoryIcon };
