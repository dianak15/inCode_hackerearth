import { memo, SVGProps } from 'react';

const Other2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.5 17C7.88071 17 9 15.8807 9 14.5C9 13.1193 7.88071 12 6.5 12C5.11929 12 4 13.1193 4 14.5C4 15.8807 5.11929 17 6.5 17ZM15.5 17C16.8807 17 18 15.8807 18 14.5C18 13.1193 16.8807 12 15.5 12C14.1193 12 13 13.1193 13 14.5C13 15.8807 14.1193 17 15.5 17ZM26 14.5C26 15.8807 24.8807 17 23.5 17C22.1193 17 21 15.8807 21 14.5C21 13.1193 22.1193 12 23.5 12C24.8807 12 26 13.1193 26 14.5Z'
      fill='#343B71'
    />
  </svg>
);

const Memo = memo(Other2Icon);
export { Memo as Other2Icon };
