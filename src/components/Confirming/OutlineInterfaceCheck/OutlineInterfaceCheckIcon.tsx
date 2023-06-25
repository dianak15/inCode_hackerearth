import { memo, SVGProps } from 'react';

const OutlineInterfaceCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 100 57' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M98.2426 1.79906C100.586 3.73948 100.586 6.88552 98.2426 8.82594L42.2426 55.2009C39.8995 57.1413 36.1005 57.1413 33.7574 55.2009L1.75736 28.7009C-0.58579 26.7605 -0.58579 23.6145 1.75736 21.6741C4.1005 19.7336 7.89949 19.7336 10.2426 21.6741L38 44.6606L89.7574 1.79906C92.1005 -0.141354 95.8995 -0.141354 98.2426 1.79906Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(OutlineInterfaceCheckIcon);
export { Memo as OutlineInterfaceCheckIcon };
