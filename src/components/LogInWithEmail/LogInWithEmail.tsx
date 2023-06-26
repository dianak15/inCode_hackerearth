import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { DeleteButtonIcon } from './DeleteButtonIcon';
import { DictationIcon } from './DictationIcon';
import { EmojiIcon } from './EmojiIcon';
import classes from './LogInWithEmail.module.css';
import { OutlineBrandsGoogle } from './OutlineBrandsGoogle/OutlineBrandsGoogle';
import { OutlineCommunicationEnvelopeOp } from './OutlineCommunicationEnvelopeOp/OutlineCommunicationEnvelopeOp';
import { Rectangle3Icon } from './Rectangle3Icon';
import { Rectangle4Icon } from './Rectangle4Icon';
import { Rectangle5Icon } from './Rectangle5Icon';
import { Rectangle6Icon } from './Rectangle6Icon';
import { ShiftIcon } from './ShiftIcon';
import { SystemKeyboardsIPhoneXLightAlp } from './SystemKeyboardsIPhoneXLightAlp/SystemKeyboardsIPhoneXLightAlp';

interface Props {
  className?: string;
}

export const LogInWithEmail: FC<Props> = memo(function LogInWithEmail(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.modalPanel}></div>
      <div className={classes.modalPanel2}></div>
      <div className={classes.rectangle32}></div>
      <div className={classes.logInWithEmail}>Log in with email</div>
      <div className={classes.rectangle33}></div>
      <div className={classes.rectangle34}>
        <Rectangle3Icon className={classes.icon5} />
      </div>
      <div className={classes.rectangle42}>
        <Rectangle4Icon className={classes.icon6} />
      </div>
      <div className={classes.rectangle52}>
        <Rectangle5Icon className={classes.icon7} />
      </div>
      <div className={classes.next}>Next</div>
      <div className={classes.logInWithYourEmail}>Log in with your email</div>
      <div className={classes.enterYourEmail}>Enter your email</div>
      <div className={classes.iWouldLikeToUseMyEmailToLogInC}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>I would like to use my email to log in? Click here: </span>
          <span className={classes.label2}>Log in with email</span>
        </p>
      </div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.oR}>OR</div>
      <div className={classes.rectangle62}>
        <Rectangle6Icon className={classes.icon8} />
      </div>
      <div className={classes.loginWithGoogle}>Login with Google</div>
      <OutlineBrandsGoogle />
      <OutlineCommunicationEnvelopeOp className={classes.outlineCommunicationEnvelopeOp} />
      <SystemKeyboardsIPhoneXLightAlp
        className={classes.systemKeyboardsIPhoneXLightAlp}
        classes={{
          homeIndicator2: classes.homeIndicator,
          dictation: classes.dictation,
          emoji: classes.emoji,
          rectangle: classes.rectangle,
          rectangle2: classes.rectangle2,
          rectangle3: classes.rectangle3,
          rectangle4: classes.rectangle4,
          deleteButton: classes.deleteButton,
          rectangle5: classes.rectangle5,
          rectangle6: classes.rectangle6,
          rectangle7: classes.rectangle7,
          rectangle8: classes.rectangle8,
          rectangle9: classes.rectangle9,
          rectangle10: classes.rectangle10,
          rectangle11: classes.rectangle11,
          rectangle12: classes.rectangle12,
          rectangle13: classes.rectangle13,
          rectangle14: classes.rectangle14,
          rectangle15: classes.rectangle15,
          rectangle16: classes.rectangle16,
          rectangle17: classes.rectangle17,
          rectangle18: classes.rectangle18,
          rectangle19: classes.rectangle19,
          rectangle20: classes.rectangle20,
          rectangle21: classes.rectangle21,
          rectangle22: classes.rectangle22,
          rectangle23: classes.rectangle23,
          rectangle24: classes.rectangle24,
          rectangle25: classes.rectangle25,
          rectangle26: classes.rectangle26,
          rectangle27: classes.rectangle27,
          rectangle28: classes.rectangle28,
          rectangle29: classes.rectangle29,
          rectangle30: classes.rectangle30,
          rectangle31: classes.rectangle31,
        }}
        swap={{
          dictation: (
            <div className={classes.dictation}>
              <DictationIcon className={classes.icon} />
            </div>
          ),
          emoji: (
            <div className={classes.emoji}>
              <EmojiIcon className={classes.icon2} />
            </div>
          ),
          deleteButton: (
            <div className={classes.deleteButton}>
              <DeleteButtonIcon className={classes.icon3} />
            </div>
          ),
          shift: <ShiftIcon className={classes.icon4} />,
        }}
      />
    </div>
  );
});
