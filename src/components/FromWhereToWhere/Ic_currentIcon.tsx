import { memo, SVGProps } from 'react';

const Ic_currentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.8066 20.7849C16.6587 20.7849 21.4027 16.1775 21.4027 10.494C21.4027 4.81055 16.6587 0.203186 10.8066 0.203186C4.95457 0.203186 0.210526 4.81055 0.210526 10.494C0.210526 16.1775 4.95457 20.7849 10.8066 20.7849Z'
      fill='white'
      stroke='#4CE5B1'
      strokeWidth={2}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.8066 15.6394C13.7327 15.6394 16.1047 13.3358 16.1047 10.494C16.1047 7.65229 13.7327 5.34861 10.8066 5.34861C7.8806 5.34861 5.50858 7.65229 5.50858 10.494C5.50858 13.3358 7.8806 15.6394 10.8066 15.6394Z'
      fill='#4CE5B1'
    />
  </svg>
);

const Memo = memo(Ic_currentIcon);
export { Memo as Ic_currentIcon };
