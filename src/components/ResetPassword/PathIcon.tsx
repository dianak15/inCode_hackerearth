import { memo, SVGProps } from 'react';

const PathIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 4.5H9C8.1 4.5 7.5 5.1 7.5 6V9H12V13.5H7.5V24H3V13.5H0V9H3V5.25C3 2.4 5.4 0 8.25 0H12V4.5Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(PathIcon);
export { Memo as PathIcon };
