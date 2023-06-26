import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { DeleteIcon } from './DeleteIcon';
import { DictationIcon } from './DictationIcon';
import { DictationIcon2 } from './DictationIcon2';
import { IPhoneXKeyboardsLightNumeric } from './IPhoneXKeyboardsLightNumeric/IPhoneXKeyboardsLightNumeric';
import { LeftAccessoryIcon } from './LeftAccessoryIcon';
import { OutlineBrandsGoogle } from './OutlineBrandsGoogle/OutlineBrandsGoogle';
import { OutlineCommunicationPhone } from './OutlineCommunicationPhone/OutlineCommunicationPhone';
import { OvalIcon } from './OvalIcon';
import { OvalIcon2 } from './OvalIcon2';
import classes from './PhoneVerification.module.css';
import { Rectangle6Icon } from './Rectangle6Icon';

interface Props {
  className?: string;
}

export const PhoneVerification: FC<Props> = memo(function PhoneVerification(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.modalPanel}></div>
      <div className={classes.modalPanel2}></div>
      <div className={classes.rectangle}></div>
      <div className={classes.phoneVerification}>Phone verification</div>
      <div className={classes.enterThe4DigitCodeSentThroughS}>Enter the 4-digit code sent through SMS here</div>
      <OutlineCommunicationPhone className={classes.outlineCommunicationPhone} />
      <div className={classes.iWouldLikeToUseMyEmailToLogInC}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>I would like to use my email to log in? Click here: </span>
          <span className={classes.label2}>Log in with email</span>
        </p>
      </div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.oR}>OR</div>
      <div className={classes.rectangle6}>
        <Rectangle6Icon className={classes.icon4} />
      </div>
      <div className={classes.loginWithGoogle}>Login with Google</div>
      <OutlineBrandsGoogle />
      <div className={classes.leftAccessory}>
        <LeftAccessoryIcon className={classes.icon5} />
      </div>
      <div className={classes.rectangle10}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.rectangle12}></div>
      <div className={classes.rectangle13}></div>
      <div className={classes._3}>3</div>
      <div className={classes._2}>2</div>
      <div className={classes.oval}>
        <OvalIcon className={classes.icon6} />
      </div>
      <div className={classes.oval2}>
        <OvalIcon2 className={classes.icon7} />
      </div>
      <div className={classes.rectangle14}></div>
      <div className={classes.verifyNow}>Verify Now</div>
      <IPhoneXKeyboardsLightNumeric
        className={classes.iPhoneXKeyboardsLightNumeric}
        classes={{
          rectangle24: classes.rectangle24,
          dictation: classes.dictation,
          dictation2: classes.dictation2,
          delete: classes.delete,
        }}
        swap={{
          dictation: (
            <div className={classes.dictation}>
              <DictationIcon className={classes.icon} />
            </div>
          ),
          dictation2: (
            <div className={classes.dictation2}>
              <DictationIcon2 className={classes.icon2} />
            </div>
          ),
          delete: (
            <div className={classes.delete}>
              <DeleteIcon className={classes.icon3} />
            </div>
          ),
        }}
      />
    </div>
  );
});
