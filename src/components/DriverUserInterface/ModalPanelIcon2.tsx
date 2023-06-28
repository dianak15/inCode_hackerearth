import { memo, SVGProps } from 'react';

const ModalPanelIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 253 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8C0 3.58172 3.58172 0 8 0H245C249.418 0 253 3.58172 253 8V29C253 33.4183 249.418 37 245 37H8C3.58172 37 0 33.4183 0 29V8Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(ModalPanelIcon2);
export { Memo as ModalPanelIcon2 };
