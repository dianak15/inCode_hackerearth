import { memo, SVGProps } from 'react';

const ModalPanelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 360 513' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8C0 3.58172 3.58172 0 8 0H352C356.418 0 360 3.58172 360 8V505C360 509.418 356.418 513 352 513H8C3.58172 513 0 509.418 0 505V8Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(ModalPanelIcon);
export { Memo as ModalPanelIcon };
