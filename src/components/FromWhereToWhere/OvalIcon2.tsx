import { memo, SVGProps } from 'react';

const OvalIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19.837 39.9217C30.4444 39.9217 39.0435 31.1563 39.0435 20.3435C39.0435 9.5307 30.4444 0.765217 19.837 0.765217C9.22949 0.765217 0.630432 9.5307 0.630432 20.3435C0.630432 31.1563 9.22949 39.9217 19.837 39.9217Z'
      fill='#4CE5B1'
      stroke='white'
      strokeWidth={2}
    />
  </svg>
);

const Memo = memo(OvalIcon2);
export { Memo as OvalIcon2 };
