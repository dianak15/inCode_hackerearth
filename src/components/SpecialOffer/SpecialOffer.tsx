import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BatteryIcon } from './BatteryIcon';
import { CellularConnectionIcon } from './CellularConnectionIcon';
import { ModalPanelIcon } from './ModalPanelIcon';
import { ModalPanelIcon2 } from './ModalPanelIcon2';
import { ModalPanelIcon3 } from './ModalPanelIcon3';
import { ModalPanelIcon4 } from './ModalPanelIcon4';
import { OutlineStatusAward } from './OutlineStatusAward/OutlineStatusAward';
import { OutlineStatusDiamond } from './OutlineStatusDiamond/OutlineStatusDiamond';
import { OutlineStatusPresent } from './OutlineStatusPresent/OutlineStatusPresent';
import { RectangleIcon } from './RectangleIcon';
import classes from './SpecialOffer.module.css';

interface Props {
  className?: string;
}

export const SpecialOffer: FC<Props> = memo(function SpecialOffer(props = {}) {
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
      <div className={classes.specialOffer}>Special Offer</div>
      <div className={classes.modalPanel}>
        <ModalPanelIcon className={classes.icon4} />
      </div>
      <div className={classes.diamondDiscount15Off}>Diamond discount -15 % off</div>
      <div className={classes.order30RidesAndGetA15Discount}>Order 30 rides and get a -15% discount!</div>
      <OutlineStatusDiamond />
      <div className={classes.modalPanel2}>
        <ModalPanelIcon2 className={classes.icon5} />
      </div>
      <div className={classes.goldDiscount10Off}>Gold discount -10 % off</div>
      <div className={classes.order20RidesAndGetA10Discount}>Order 20 rides and get a -10% discount!</div>
      <OutlineStatusAward />
      <div className={classes.modalPanel3}>
        <ModalPanelIcon3 className={classes.icon6} />
      </div>
      <div className={classes.silverDiscount5Off}> Silver discount -5 % off</div>
      <div className={classes.order10RidesAndGetA5Discount}>Order 10 rides and get a -5% discount!</div>
      <OutlineStatusPresent />
      <div className={classes.modalPanel4}>
        <ModalPanelIcon4 className={classes.icon7} />
      </div>
      <div className={classes.inviteYourFriendsAndGet2Coupon}>Invite your friends and get 2 coupons </div>
      <div className={classes.sendThisReferralCodeToYourFrie}>
        Send this referral code to your friend and get 2 coupons each.{' '}
      </div>
      <div className={classes._1X456G}>1X456G</div>
      <div className={classes.getReferralCode}>Get referral code </div>
      <div className={classes.line1}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.sendReferralCode}>Send referral code</div>
      <div className={classes.image2}></div>
    </div>
  );
});
