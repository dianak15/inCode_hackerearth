import { memo, SVGProps } from 'react';

const Ic_pinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 153 169' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M76.5 169C84.2621 169 121.225 129.574 130.339 117.015C144.35 97.7091 153 86.288 153 64.9756C153 29.0906 118.75 0 76.5 0C34.2502 0 0 29.0906 0 64.9756C0 86.3989 8.01507 97.744 21.9788 117.015C31.7113 130.446 68.7379 169 76.5 169ZM76.5 97.4635C97.6249 97.4635 114.75 82.9182 114.75 64.9757C114.75 47.0331 97.6249 32.4879 76.5 32.4879C55.3751 32.4879 38.25 47.0331 38.25 64.9757C38.25 82.9182 55.3751 97.4635 76.5 97.4635Z'
      fill='#F52D56'
    />
  </svg>
);

const Memo = memo(Ic_pinIcon);
export { Memo as Ic_pinIcon };
