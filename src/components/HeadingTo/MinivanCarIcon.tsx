import { memo, SVGProps } from 'react';

const MinivanCarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 71 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M57.3651 15.356C60.346 15.356 62.7635 16.9758 62.7635 18.9758C62.7635 19.1309 62.7449 19.2827 62.7164 19.4311C62.3815 21.2166 60.1161 22.5965 57.3658 22.5965C54.5391 22.5965 52.2237 21.14 51.9895 19.2851C51.9767 19.1826 51.9659 19.0801 51.9659 18.9758C51.9652 16.9758 54.3821 15.356 57.3651 15.356Z'
      fill='white'
    />
    <path
      d='M11.0505 15.356C14.0321 15.356 16.4489 16.9758 16.4489 18.9758C16.4489 19.1309 16.431 19.2827 16.4025 19.4311C16.0683 21.2166 13.8014 22.5965 11.0519 22.5965C8.22595 22.5965 5.9105 21.14 5.6756 19.2851C5.66275 19.1826 5.65347 19.0801 5.65347 18.9758C5.65204 16.9758 8.06816 15.356 11.0505 15.356Z'
      fill='white'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.91 0.180231C21.0779 0.0629131 21.2724 0 21.4773 0H30.9877L38.1396 4.30574C39.2045 4.39514 40.1257 4.50441 40.8599 4.6368C45.1024 5.40242 55.8078 10.1221 55.8078 10.1221C55.8078 10.1221 67.5864 11.3454 69.8333 14.948C69.8333 14.948 70.8029 15.3277 70.9792 16.3011C71.0699 16.8019 70.8486 17.5623 70.6044 18.1996C70.3367 18.8967 69.4749 19.4215 68.4146 19.5321L63.3025 20.0693C63.3789 19.8821 63.4424 19.692 63.4796 19.4957C63.5117 19.3262 63.5331 19.1529 63.5331 18.9753C63.5331 16.6947 60.7664 14.8398 57.365 14.8398C53.9629 14.8398 51.1962 16.6947 51.1962 18.9753C51.1962 19.0945 51.2076 19.2113 51.2219 19.3272C51.2733 19.7313 51.4133 20.1177 51.6268 20.4802L51.0256 20.5017L17.0629 19.8855C17.1064 19.7572 17.1407 19.6279 17.1664 19.4957C17.1992 19.3262 17.2192 19.1529 17.2192 18.9753C17.2192 16.6947 14.4525 14.8398 11.0518 14.8398C7.64972 14.8398 4.88303 16.6947 4.88303 18.9753C4.88303 19.0945 4.89446 19.2113 4.90945 19.3272C4.91576 19.3792 4.927 19.4301 4.93826 19.4812L4.94543 19.5138C4.94829 19.5271 4.95109 19.5403 4.95373 19.5537L2.02283 19.1524C0.814047 18.9867 -0.0412995 18.2618 0.00153955 17.434L0.250716 12.4199C0.290701 11.6202 0.619131 10.8393 1.20674 10.1436L5.08367 5.55611C5.71911 4.80486 6.88361 4.32414 8.1695 4.28056C9.82946 4.22478 12.3657 4.14693 15.3266 4.0808L20.91 0.180231ZM19.6543 4.00002C21.9313 3.92896 24.5918 3.86333 26.3684 3.87514C27.5267 3.88284 29.1228 3.92886 30.7664 3.98832C27.2131 3.9265 23.2983 3.94617 19.6543 4.00002ZM19.0163 10.3524L19.7967 5.12805C23.4944 5.07203 27.4913 5.04761 30.9927 5.10172V10.6808L19.0163 10.3524ZM50.0182 11.0543L51.2027 11.0988C51.5247 11.1108 51.8195 10.9796 51.9281 10.7756C52.0366 10.5726 51.9316 10.3461 51.6725 10.2183C50.9763 9.87739 50.1238 9.46992 49.1742 9.03947V10.3725C49.7526 10.7005 50.0182 11.0543 50.0182 11.0543ZM47.2041 9.84177C47.1652 9.83713 47.1264 9.8325 47.083 9.83139C44.981 9.77872 44.6241 11.0543 44.6241 11.0543L34.3341 10.7723V5.18549C36.7617 5.27407 38.7151 5.42251 39.7861 5.65473C42.1394 6.16562 44.8761 7.18501 47.2908 8.21158V9.85054C47.2607 9.84853 47.2324 9.84515 47.2041 9.84177L47.2041 9.84177ZM5.47924 9.3248C5.83838 9.74328 6.49238 10.009 7.21136 10.0291L15.6735 10.2609L16.4317 5.18836C12.9346 5.2597 10.013 5.3478 8.53294 5.40143C7.84823 5.42585 7.23064 5.69063 6.91149 6.09762L5.44283 7.96642C5.10654 8.394 5.12082 8.90728 5.47924 9.3248Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(MinivanCarIcon);
export { Memo as MinivanCarIcon };
