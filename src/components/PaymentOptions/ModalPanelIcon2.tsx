import { memo, SVGProps } from 'react';

const ModalPanelIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 298 204' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8C0 3.58172 3.58172 0 8 0H290C294.418 0 298 3.58172 298 8V196C298 200.418 294.418 204 290 204H8C3.58172 204 0 200.418 0 196V8Z'
      fill='#FBE411'
    />
  </svg>
);

const Memo = memo(ModalPanelIcon2);
export { Memo as ModalPanelIcon2 };
