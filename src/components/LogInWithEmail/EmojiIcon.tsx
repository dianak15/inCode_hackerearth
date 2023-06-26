import { memo, SVGProps } from 'react';

const EmojiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.08 0.123703C20.2376 0.123703 26.04 5.23319 26.04 11.5361C26.04 17.8389 20.2376 22.9484 13.08 22.9484C5.92239 22.9484 0.119999 17.8389 0.119999 11.5361C0.119999 5.23319 5.92239 0.123703 13.08 0.123703ZM13.08 1.45325C19.4036 1.45388 24.5293 5.96839 24.5289 11.5368C24.5284 17.1053 19.4019 21.6191 13.0783 21.6189C6.75469 21.6187 1.62854 17.1045 1.62854 11.5361C1.62863 8.86177 2.83519 6.29703 4.98277 4.40612C7.13035 2.51521 10.043 1.45302 13.08 1.45325V1.45325ZM8.9801 6.58595C8.57952 6.58175 8.19376 6.71918 7.90918 6.96747C7.6246 7.21576 7.46498 7.55417 7.46605 7.90694C7.46605 8.64327 8.14391 9.24019 8.9801 9.24019C9.81629 9.24019 10.4942 8.64327 10.4942 7.90694C10.4952 7.55417 10.3356 7.21576 10.051 6.96747C9.76644 6.71918 9.38068 6.58175 8.9801 6.58595V6.58595ZM21.7169 13.5019C21.0267 16.7858 17.4274 19.5276 13.0784 19.5276C8.76399 19.5276 5.18574 16.8257 4.45512 13.5789C4.30705 12.7686 5.06068 12.5775 5.77056 12.7287C8.14534 13.3333 10.6081 13.6275 13.08 13.6017C15.5463 13.6269 18.0035 13.3337 20.3732 12.7315C21.0634 12.5775 21.8024 12.7515 21.7169 13.5019V13.5019ZM19.374 13.9584C19.3066 13.9812 19.2383 13.9983 19.1693 14.0183C19.1621 14.0211 19.3902 13.9555 19.3834 13.9584C17.3342 14.4551 15.216 14.6962 13.0907 14.6745C10.5544 14.6745 8.28609 14.4263 6.72506 13.9327C5.59333 13.636 5.81041 14.8086 6.60583 15.1681C8.64072 15.9838 10.8547 16.3949 13.0904 16.3721C15.7498 16.3721 18.1195 15.8271 19.6847 15.1224C20.4254 14.703 20.5718 13.5789 19.374 13.9584V13.9584ZM17.1883 6.58595C16.7877 6.58175 16.4019 6.71917 16.1173 6.96745C15.8327 7.21573 15.673 7.55414 15.6739 7.90694C15.666 8.38796 15.9528 8.83549 16.4246 9.07805C16.8964 9.32062 17.4799 9.32062 17.9517 9.07805C18.4235 8.83549 18.7104 8.38796 18.7024 7.90694C18.7034 7.55419 18.5437 7.21583 18.2591 6.96756C17.9746 6.71928 17.5889 6.58183 17.1883 6.58595V6.58595Z'
      fill='#50555C'
    />
  </svg>
);

const Memo = memo(EmojiIcon);
export { Memo as EmojiIcon };
