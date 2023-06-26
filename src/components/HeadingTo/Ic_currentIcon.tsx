import { memo, SVGProps } from 'react';

const Ic_currentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 155 158' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M77.5 158C120.302 158 155 122.63 155 79C155 35.3695 120.302 0 77.5 0C34.6979 0 0 35.3695 0 79C0 122.63 34.6979 158 77.5 158Z'
      fill='#4CE5B1'
      fillOpacity={0.1}
    />
    <g filter='url(#filter0_d_96_758)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M77.837 98.9217C88.4444 98.9217 97.0435 90.1562 97.0435 79.3435C97.0435 68.5307 88.4444 59.7652 77.837 59.7652C67.2295 59.7652 58.6304 68.5307 58.6304 79.3435C58.6304 90.1562 67.2295 98.9217 77.837 98.9217Z'
        fill='#4CE5B1'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M77.837 98.9217C88.4444 98.9217 97.0435 90.1562 97.0435 79.3435C97.0435 68.5307 88.4444 59.7652 77.837 59.7652C67.2295 59.7652 58.6304 68.5307 58.6304 79.3435C58.6304 90.1562 67.2295 98.9217 77.837 98.9217Z'
        stroke='white'
        strokeWidth={2}
      />
    </g>
    <path
      d='M87.4998 73.4634L78.675 89.4896C78.5084 89.8241 78.2292 89.9913 77.8374 89.9913C77.7884 89.9913 77.7149 89.9817 77.617 89.9626C77.4015 89.9149 77.2276 89.8074 77.0953 89.6401C76.9631 89.4729 76.8969 89.2842 76.8969 89.074L77.0953 80.5862L68.3286 78.2119C68.1131 78.2119 67.9196 78.1474 67.7482 78.0184C67.5767 77.8894 67.4665 77.7198 67.4175 77.5096C67.3686 77.2994 67.3881 77.0987 67.4763 76.9076C67.5645 76.7165 67.7065 76.5732 67.9025 76.4776L86.2361 72.2308C86.3635 72.1639 86.5055 72.1304 86.6622 72.1304C86.9268 72.1304 87.1472 72.2212 87.3235 72.4028C87.4705 72.5365 87.5611 72.7014 87.5954 72.8973C87.6296 73.0931 87.5978 73.2819 87.4998 73.4634Z'
      fill='white'
    />
    <defs>
      <filter
        id='filter0_d_96_758'
        x={53.6304}
        y={56.7652}
        width={48.4131}
        height={49.1565}
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
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_96_758' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_96_758' result='shape' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(Ic_currentIcon);
export { Memo as Ic_currentIcon };
