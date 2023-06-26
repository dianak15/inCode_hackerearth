import { memo, SVGProps } from 'react';
 
const OutlineCommunicationForwardIco = (props: SVGProps<SVGSVGElement>) => (
 <svg preserveAspectRatio='none' viewBox='0 0 40 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
   <path
     fillRule='evenodd'
     clipRule='evenodd'
     d='M0.535287 21.5358C0.0367247 21.1049 -0.0799564 20.4583 0.244504 19.9244L1.82288 17.3268C5.55848 11.179 13.1251 7.30404 21.3943 7.30404H22.1704C22.227 6.27958 22.3 5.25559 22.3895 4.23235L22.5422 2.48741C22.6663 1.06837 24.565 0.275119 26.0037 1.04121C30.7235 3.55439 34.8266 6.79268 38.0943 10.5835L39.1205 11.774C39.5432 12.2642 39.5432 12.9246 39.1205 13.4149L38.0943 14.6054C34.8266 18.3962 30.7235 21.6344 26.0037 24.1476C24.565 24.9137 22.6663 24.1205 22.5422 22.7014L22.3895 20.9565C22.2826 19.7345 22.1992 18.5115 22.1392 17.2878C17.3021 17.1714 12.4709 17.985 8.03083 19.6928L2.45716 21.8365C1.80503 22.0873 1.03385 21.9666 0.535287 21.5358ZM5.52634 17.5584L6.61652 17.1391C12.0416 15.0526 17.994 14.1717 23.9005 14.5497C24.7607 14.6048 25.4326 15.1916 25.4581 15.9103C25.5154 17.5253 25.6146 19.1396 25.7556 20.752L25.7678 20.8916C29.4656 18.7135 32.7062 16.0353 35.3532 12.9645L35.6722 12.5944L35.3532 12.2243C32.7062 9.15357 29.4656 6.47534 25.7678 4.29722L25.7556 4.43683C25.6297 5.8761 25.5372 7.31688 25.478 8.75837C25.4469 9.51587 24.701 10.1165 23.7915 10.1165L21.3943 10.1165C14.8754 10.1165 8.87246 12.9626 5.52634 17.5584Z'
     fill='white'
   />
 </svg>
);
 
const Memo = memo(OutlineCommunicationForwardIco);
export { Memo as OutlineCommunicationForwardIco };

