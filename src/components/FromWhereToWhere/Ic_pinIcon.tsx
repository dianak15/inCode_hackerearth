import { memo, SVGProps } from 'react';

const Ic_pinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.55454 24.3325C10.5026 24.3325 15.0175 18.826 16.1307 17.0719C17.842 14.3756 18.8986 12.7805 18.8986 9.80389C18.8986 4.79201 14.7151 0.72908 9.55454 0.72908C4.39398 0.72908 0.210526 4.79201 0.210526 9.80389C0.210526 12.796 1.18952 14.3805 2.8951 17.0719C4.08387 18.9478 8.60645 24.3325 9.55454 24.3325ZM9.55454 14.3413C12.1348 14.3413 14.2266 12.3099 14.2266 9.80392C14.2266 7.29798 12.1348 5.26651 9.55454 5.26651C6.97427 5.26651 4.88254 7.29798 4.88254 9.80392C4.88254 12.3099 6.97427 14.3413 9.55454 14.3413Z'
      fill='#F52D56'
    />
  </svg>
);

const Memo = memo(Ic_pinIcon);
export { Memo as Ic_pinIcon };
