import { memo, SVGProps } from 'react';

const ModalPanelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 441 246' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path opacity={0.95} d='M0 16C0 7.16344 7.16344 0 16 0H425C433.837 0 441 7.16344 441 16V246H0V16Z' fill='#FBE411' />
  </svg>
);

const Memo = memo(ModalPanelIcon);
export { Memo as ModalPanelIcon };
