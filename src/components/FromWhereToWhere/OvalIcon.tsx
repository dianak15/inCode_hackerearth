import { memo, SVGProps } from 'react';

const OvalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 155 158' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M77.5 158C120.302 158 155 122.63 155 79C155 35.3695 120.302 0 77.5 0C34.6979 0 0 35.3695 0 79C0 122.63 34.6979 158 77.5 158Z'
      fill='#4CE5B1'
      fillOpacity={0.1}
    />
  </svg>
);

const Memo = memo(OvalIcon);
export { Memo as OvalIcon };
