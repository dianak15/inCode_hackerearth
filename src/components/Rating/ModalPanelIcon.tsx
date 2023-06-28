import { memo, SVGProps } from 'react';

const ModalPanelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 140 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 8C0 3.58172 3.58172 0 8 0H132C136.418 0 140 3.58172 140 8V29C140 33.4183 136.418 37 132 37H8C3.58172 37 0 33.4183 0 29V8Z'
      fill='white'
      fillOpacity={0.65}
    />
  </svg>
);

const Memo = memo(ModalPanelIcon);
export { Memo as ModalPanelIcon };
