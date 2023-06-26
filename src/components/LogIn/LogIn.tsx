import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { DeleteIcon } from './DeleteIcon';
import { DictationIcon } from './DictationIcon';
import { DictationIcon2 } from './DictationIcon2';
import { IPhoneXKeyboardsLightNumeric } from './IPhoneXKeyboardsLightNumeric/IPhoneXKeyboardsLightNumeric';
import classes from './LogIn.module.css';
import { OutlineBrandsGoogle } from './OutlineBrandsGoogle/OutlineBrandsGoogle';
import { OutlineCommunicationPhone } from './OutlineCommunicationPhone/OutlineCommunicationPhone';
import { Rectangle3Icon } from './Rectangle3Icon';
import { Rectangle4Icon } from './Rectangle4Icon';
import { Rectangle5Icon } from './Rectangle5Icon';
import { Rectangle6Icon } from './Rectangle6Icon';

interface Props {
  className?: string;
}

export const LogIn: FC<Props> = memo(function LogIn(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.modalPanel}></div>
      <div className={classes.modalPanel2}></div>
      <div className={classes.rectangle}></div>
      <div className={classes.logIn}>Log in</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}>
        <Rectangle3Icon className={classes.icon4} />
      </div>
      <div className={classes.rectangle4}>
        <Rectangle4Icon className={classes.icon5} />
      </div>
      <div className={classes.rectangle5}>
        <Rectangle5Icon className={classes.icon6} />
      </div>
      <div className={classes.next}>Next</div>
      <div className={classes.logInWithYourPhoneNumber}>Log in with your phone number</div>
      <div className={classes.enterYourPassword}>Enter your password</div>
      <OutlineCommunicationPhone className={classes.outlineCommunicationPhone} />
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
        <Rectangle6Icon className={classes.icon7} />
      </div>
      <div className={classes.loginWithGoogle}>Login with Google</div>
      <OutlineBrandsGoogle />
    </div>
  );
});
