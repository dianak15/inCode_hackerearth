import { memo, SVGProps } from 'react';

const ModalPanelIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8C0 3.58172 3.58172 0 8 0H28C32.4183 0 36 3.58172 36 8V29C36 33.4183 32.4183 37 28 37H8C3.58172 37 0 33.4183 0 29V8Z'
      fill='white'
      fillOpacity={0.9}
    />
  </svg>
);

const Memo = memo(ModalPanelIcon3);
export { Memo as ModalPanelIcon3 };
