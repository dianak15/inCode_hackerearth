import { memo, SVGProps } from 'react';

const Bell1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_115_578)'>
      <path
        d='M21.1032 19.0994C21.0326 19.0536 20.5017 18.6816 19.97 17.5564C18.9937 15.49 18.7887 12.5792 18.7887 10.5012C18.7887 10.4921 18.7885 10.4832 18.7882 10.4742C18.7776 7.72781 17.1331 5.36034 14.7797 4.29811V2.67356C14.7797 1.19934 13.5824 0 12.1106 0H11.8894C10.4176 0 9.22022 1.19934 9.22022 2.67356V4.29802C6.85904 5.36367 5.21124 7.74323 5.21124 10.5012C5.21124 12.5792 5.0063 15.49 4.02994 17.5564C3.49833 18.6816 2.96738 19.0535 2.89679 19.0994C2.5995 19.2369 2.45293 19.5548 2.52132 19.8768C2.59036 20.2021 2.8944 20.4263 3.22641 20.4263H8.38018C8.40896 22.4017 10.0212 24 12 24C13.9788 24 15.5911 22.4017 15.6198 20.4263H20.7736C21.1056 20.4263 21.4096 20.2021 21.4787 19.8768C21.547 19.5548 21.4005 19.2369 21.1032 19.0994V19.0994ZM10.6265 2.67356C10.6265 1.97602 11.1931 1.40855 11.8894 1.40855H12.1106C12.807 1.40855 13.3735 1.97602 13.3735 2.67356V3.84155C12.9297 3.74981 12.4703 3.70153 11.9998 3.70153C11.5295 3.70153 11.0702 3.74977 10.6266 3.84141V2.67356H10.6265ZM12 22.5915C10.7966 22.5915 9.81497 21.625 9.78643 20.4264H14.2135C14.185 21.625 13.2034 22.5915 12 22.5915V22.5915ZM14.8313 19.0178C14.8311 19.0178 4.82883 19.0178 4.82883 19.0178C4.95047 18.8282 5.07427 18.6135 5.19732 18.371C6.13969 16.5127 6.61754 13.8649 6.61754 10.5012C6.61754 7.5285 9.03202 5.11008 11.9998 5.11008C14.9675 5.11008 17.382 7.5285 17.382 10.5035C17.382 10.5122 17.3821 10.5208 17.3825 10.5294C17.3851 13.8797 17.8629 16.518 18.8027 18.371C18.9257 18.6136 19.0496 18.8282 19.1712 19.0178H14.8313Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_115_578'>
        <rect width={24} height={24} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(Bell1Icon);
export { Memo as Bell1Icon };
