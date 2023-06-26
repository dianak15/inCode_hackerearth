import { memo, SVGProps } from 'react';

const MicrophoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect x={2.5} width={5} height={14} rx={2.5} fill='white' />
    <path
      d='M0.5 7.5V11.5C0.5 13.9853 2.51472 16 5 16V16C7.48528 16 9.5 13.9853 9.5 11.5V7.5'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <line x1={5} y1={16.5} x2={5} y2={20.5} stroke='white' strokeLinecap='round' strokeLinejoin='round' />
    <line x1={3} y1={20.5} x2={7} y2={20.5} stroke='white' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(MicrophoneIcon);
export { Memo as MicrophoneIcon };
