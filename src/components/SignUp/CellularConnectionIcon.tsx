import { memo, SVGProps } from 'react';

const CellularConnectionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19.5413 0H18.32C17.6455 0 17.0987 0.447715 17.0987 1V9.66667C17.0987 10.219 17.6455 10.6667 18.32 10.6667H19.5413C20.2159 10.6667 20.7627 10.219 20.7627 9.66667V1C20.7627 0.447715 20.2159 0 19.5413 0ZM12.6204 2.33333H13.8418C14.5163 2.33333 15.0631 2.78105 15.0631 3.33333V9.66667C15.0631 10.219 14.5163 10.6667 13.8418 10.6667H12.6204C11.9459 10.6667 11.3991 10.219 11.3991 9.66667V3.33333C11.3991 2.78105 11.9459 2.33333 12.6204 2.33333ZM8.14222 4.66667H6.92089C6.24636 4.66667 5.69955 5.11438 5.69955 5.66667V9.66667C5.69955 10.219 6.24636 10.6667 6.92089 10.6667H8.14222C8.81675 10.6667 9.36356 10.219 9.36356 9.66667V5.66667C9.36356 5.11438 8.81675 4.66667 8.14222 4.66667ZM2.44267 6.66667H1.22133C0.54681 6.66667 0 7.11438 0 7.66667V9.66667C0 10.219 0.54681 10.6667 1.22133 10.6667H2.44267C3.11719 10.6667 3.664 10.219 3.664 9.66667V7.66667C3.664 7.11438 3.11719 6.66667 2.44267 6.66667Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(CellularConnectionIcon);
export { Memo as CellularConnectionIcon };