import { memo, SVGProps } from 'react';

const ModalPanelIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 370 101' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8C0 3.58172 3.58172 0 8 0H362C366.418 0 370 3.58172 370 8V93C370 97.4183 366.418 101 362 101H8.00001C3.58173 101 0 97.4183 0 93V8Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(ModalPanelIcon4);
export { Memo as ModalPanelIcon4 };
