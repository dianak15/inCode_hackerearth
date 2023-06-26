import { memo, SVGProps } from 'react';

const Ic_locationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_d_99_861)'>
      <rect width={44} height={44} rx={22} fill='white' />
    </g>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M30.94 21C30.48 16.83 27.17 13.52 23 13.06V11H21V13.06C16.83 13.52 13.52 16.83 13.06 21H11V23H13.06C13.52 27.17 16.83 30.48 21 30.94V33H23V30.94C27.17 30.48 30.48 27.17 30.94 23H33V21H30.94ZM22 18C19.79 18 18 19.79 18 22C18 24.21 19.79 26 22 26C24.21 26 26 24.21 26 22C26 19.79 24.21 18 22 18ZM15 22C15 25.87 18.13 29 22 29C25.87 29 29 25.87 29 22C29 18.13 25.87 15 22 15C18.13 15 15 18.13 15 22Z'
      fill='black'
    />
    <defs>
      <filter
        id='filter0_d_99_861'
        x={-10}
        y={-5}
        width={64}
        height={64}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={5} />
        <feGaussianBlur stdDeviation={5} />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_99_861' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_99_861' result='shape' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(Ic_locationIcon);
export { Memo as Ic_locationIcon };
