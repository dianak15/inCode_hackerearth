import { memo, SVGProps } from 'react';

const OutlineStatusPresentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 31' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.89583 5.47917C4.89583 2.71199 7.1997 0.46875 10.0417 0.46875C11.6333 0.46875 13.0561 1.17232 14 2.27746C14.9439 1.17232 16.3667 0.46875 17.9583 0.46875C20.8003 0.46875 23.1042 2.71199 23.1042 5.47917C23.1042 6.4725 22.8073 7.39831 22.2952 8.17708H23.5C25.9047 8.17708 27.8542 10.0752 27.8542 12.4167V15.5C27.8542 16.7397 26.9954 17.7842 25.8254 18.1001C26.0535 20.9161 25.9214 23.7505 25.4309 26.5379C25.1379 28.2024 23.7496 29.4775 22.0259 29.665L20.578 29.8226C16.2063 30.2984 11.7937 30.2984 7.42201 29.8226L5.9741 29.665C4.25045 29.4775 2.86208 28.2024 2.56915 26.5379C2.07859 23.7505 1.94647 20.9161 2.17457 18.1001C1.00463 17.7842 0.145833 16.7397 0.145833 15.5V12.4167C0.145833 10.0752 2.09526 8.17708 4.5 8.17708H5.70477C5.19271 7.39831 4.89583 6.4725 4.89583 5.47917ZM12.8125 5.47917C12.8125 3.98915 11.572 2.78125 10.0417 2.78125C8.51138 2.78125 7.27083 3.98915 7.27083 5.47917C7.27083 6.96918 8.51138 8.17708 10.0417 8.17708C11.572 8.17708 12.8125 6.96918 12.8125 5.47917ZM17.9583 8.17708C19.4886 8.17708 20.7292 6.96918 20.7292 5.47917C20.7292 3.98915 19.4886 2.78125 17.9583 2.78125C16.428 2.78125 15.1875 3.98915 15.1875 5.47917C15.1875 6.96918 16.428 8.17708 17.9583 8.17708ZM2.52083 12.4167C2.52083 11.3524 3.40694 10.4896 4.5 10.4896H12.8125V15.8854H2.91667C2.69805 15.8854 2.52083 15.7129 2.52083 15.5V12.4167ZM15.1875 18.1979H23.4509C23.673 20.8505 23.5521 23.5213 23.09 26.1473C22.9757 26.7964 22.4343 27.2937 21.7621 27.3669L20.3142 27.5244C18.61 27.7099 16.8994 27.82 15.1875 27.8548V18.1979ZM15.1875 15.8854H25.0833C25.3019 15.8854 25.4792 15.7129 25.4792 15.5V12.4167C25.4792 11.3524 24.5931 10.4896 23.5 10.4896H15.1875V15.8854ZM12.8125 18.1979V27.8548C11.1006 27.82 9.38999 27.7099 7.68581 27.5244L6.23789 27.3669C5.56571 27.2937 5.02427 26.7964 4.91003 26.1473C4.44787 23.5213 4.327 20.8505 4.54914 18.1979H12.8125Z'
      fill='#898A8D'
    />
  </svg>
);

const Memo = memo(OutlineStatusPresentIcon);
export { Memo as OutlineStatusPresentIcon };