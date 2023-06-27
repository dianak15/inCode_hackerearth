import { memo, SVGProps } from 'react';

const TicketIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.5757 22.0489L5.56886 24.042C6.90355 23.1578 8.71952 23.3036 9.89546 24.4795C11.0714 25.6555 11.2172 27.4714 10.333 28.8061L12.3261 30.7993C12.8631 31.3363 13.7337 31.3363 14.2707 30.7993L19.132 25.9379L17.1875 23.9934C16.6505 23.4564 16.6505 22.5858 17.1875 22.0489C17.7245 21.5119 18.5951 21.5119 19.132 22.0489L21.0766 23.9934L30.7993 14.2707C31.3363 13.7337 31.3363 12.8631 30.7993 12.3261L28.8061 10.333C27.4714 11.2172 25.6555 11.0714 24.4795 9.89546C23.3036 8.71952 23.1578 6.90355 24.042 5.56886L22.0489 3.57569C21.5119 3.03872 20.6413 3.03872 20.1043 3.57569L10.3816 13.2984L12.3261 15.243C12.8631 15.7799 12.8631 16.6505 12.3261 17.1875C11.7892 17.7245 10.9186 17.7245 10.3816 17.1875L8.43705 15.243L3.5757 20.1043C3.03872 20.6413 3.03872 21.5119 3.5757 22.0489ZM13.2984 20.1043C12.7614 19.5673 12.7614 18.6967 13.2984 18.1598C13.8354 17.6228 14.706 17.6228 15.243 18.1598L16.2152 19.132C16.7522 19.669 16.7522 20.5396 16.2152 21.0766C15.6783 21.6136 14.8077 21.6136 14.2707 21.0766L13.2984 20.1043Z'
      fill='#C8C7CC'
    />
  </svg>
);

const Memo = memo(TicketIcon);
export { Memo as TicketIcon };
