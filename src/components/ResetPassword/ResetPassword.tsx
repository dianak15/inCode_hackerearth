import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BatteryIcon } from './BatteryIcon';
import { CellularConnectionIcon } from './CellularConnectionIcon';
import { ModalPanelIcon } from './ModalPanelIcon';
import { ModalPanelIcon2 } from './ModalPanelIcon2';
import { ModalPanelIcon3 } from './ModalPanelIcon3';
import { OutlineCommunicationChat } from './OutlineCommunicationChat/OutlineCommunicationChat';
import { OutlineCommunicationEnvelopeOp } from './OutlineCommunicationEnvelopeOp/OutlineCommunicationEnvelopeOp';
import { OutlineGeneralSun } from './OutlineGeneralSun/OutlineGeneralSun';
import { PathIcon } from './PathIcon';
import { Rectangle3Icon } from './Rectangle3Icon';
import { Rectangle3Icon2 } from './Rectangle3Icon2';
import { Rectangle4Icon } from './Rectangle4Icon';
import { RectangleIcon } from './RectangleIcon';
import classes from './ResetPassword.module.css';

interface Props {
  className?: string;
}

export const ResetPassword: FC<Props> = memo(function ResetPassword(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.battery}>
        <BatteryIcon className={classes.icon} />
      </div>
      <div className={classes.cellularConnection}>
        <CellularConnectionIcon className={classes.icon2} />
      </div>
      <div className={classes.rectangle}>
        <RectangleIcon className={classes.icon3} />
      </div>
      <div className={classes.modalPanel}>
        <ModalPanelIcon className={classes.icon4} />
      </div>
      <div className={classes.modalPanel2}>
        <ModalPanelIcon2 className={classes.icon5} />
      </div>
      <div className={classes.modalPanel3}>
        <ModalPanelIcon3 className={classes.icon6} />
      </div>
      <div className={classes.a}>A</div>
      <OutlineGeneralSun />
      <div className={classes.forgotPassword}>Forgot password?</div>
      <div className={classes.rectangle3}>
        <Rectangle3Icon className={classes.icon7} />
      </div>
      <div className={classes.viaSMS}>Via SMS</div>
      <div className={classes.rectangle4}>
        <Rectangle4Icon className={classes.icon8} />
      </div>
      <div className={classes.rectangle32}>
        <Rectangle3Icon2 className={classes.icon9} />
      </div>
      <div className={classes.continue}>Continue</div>
      <div className={classes.bySigningUpYouAgreeToOurPrivac}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>By signing up, you agree to our </span>
          <span className={classes.label2}>Privacy Policy,</span>
          <span className={classes.label3}> </span>
          <span className={classes.label4}>Terms and Conditions</span>
          <span className={classes.label5}>.</span>
        </p>
      </div>
      <div className={classes.rectangle2}></div>
      <div className={classes.connectWithFaceboo}>Connect with Facebook</div>
      <div className={classes.path}>
        <PathIcon className={classes.icon10} />
      </div>
      <div className={classes.alreadyHaveAnAccountLogin}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label6}>Already have an account? </span>
          <span className={classes.label7}>Login</span>
        </p>
      </div>
      <div className={classes._78}>***** **78</div>
      <OutlineCommunicationChat />
      <OutlineCommunicationEnvelopeOp />
      <div className={classes.viaEmail}>Via Email</div>
      <div className={classes.GmailCom}>***** **** **** @gmail.com</div>
      <div className={classes.selectWhichContactDetailsShoul}>
        Select which contact details should we use to reset your password.
      </div>
      <div className={classes.image2}></div>
    </div>
  );
});
