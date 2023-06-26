import { memo, SVGProps } from 'react';

const MicrophoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect x={2.55034} y={0.98008} width={5.04577} height={13.7211} rx={2.52288} fill='white' />
    <path
      d='M0.532037 8.33068V12.1202C0.532037 14.6282 2.5652 16.6614 5.07323 16.6614V16.6614C7.58126 16.6614 9.61442 14.6282 9.61442 12.1202V8.33068'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <line
      x1={5.06865}
      y1={17.1614}
      x2={5.06865}
      y2={21.0618}
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <line
      x1={3.05034}
      y1={21.0618}
      x2={7.09611}
      y2={21.0618}
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(MicrophoneIcon);
export { Memo as MicrophoneIcon };
