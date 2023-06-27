import { memo, SVGProps } from 'react';

const ModalPanelIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 370 78' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8C0 3.58172 3.58172 0 8 0H362C366.418 0 370 3.58172 370 8V70C370 74.4183 366.418 78 362 78H8.00001C3.58173 78 0 74.4183 0 70V8Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(ModalPanelIcon2);
export { Memo as ModalPanelIcon2 };
