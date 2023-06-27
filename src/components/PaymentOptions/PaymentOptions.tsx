import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BatteryIcon } from './BatteryIcon';
import { CellularConnectionIcon } from './CellularConnectionIcon';
import { ColorTitleTextLightGray2 } from './ColorTitleTextLightGray2/ColorTitleTextLightGray2';
import { Fill1CopyIcon } from './Fill1CopyIcon';
import { GiveMoney1Icon } from './GiveMoney1Icon';
import { GiveMoney1Icon2 } from './GiveMoney1Icon2';
import { Group54Icon } from './Group54Icon';
import { Group57Icon } from './Group57Icon';
import { ModalPanelIcon } from './ModalPanelIcon';
import { ModalPanelIcon2 } from './ModalPanelIcon2';
import { Other2Icon } from './Other2Icon';
import classes from './PaymentOptions.module.css';
import { RectangleIcon } from './RectangleIcon';
import { Star1Icon } from './Star1Icon';
import { Star2Icon } from './Star2Icon';
import { Star3Icon } from './Star3Icon';
import { Star4Icon } from './Star4Icon';
import { Star5Icon } from './Star5Icon';
import { TicketIcon } from './TicketIcon';
import { WalletIcon } from './WalletIcon';

interface Props {
  className?: string;
  hide?: {
    colorTitleTextLightGray?: boolean;
  };
}
/* @figmaId 32:2133 */
export const PaymentOptions: FC<Props> = memo(function PaymentOptions(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.battery}>
        <BatteryIcon className={classes.icon} />
      </div>
      <div className={classes.cellularConnection}>
        <CellularConnectionIcon className={classes.icon2} />
      </div>
      <div className={classes.modalPanel}>
        <ModalPanelIcon className={classes.icon3} />
      </div>
      <div className={classes.cash}>Cash</div>
      <div className={classes.wallet}>
        <WalletIcon className={classes.icon4} />
      </div>
      <div className={classes.choosePaymentOptions}>Choose Payment Options</div>
      <ColorTitleTextLightGray2
        className={classes.colorPrimary}
        hide={{
          colorTitleTextLightGray: true,
        }}
      />
      <div className={classes.creditCard}>Credit card</div>
      <div className={classes.ticket}>
        <TicketIcon className={classes.icon5} />
      </div>
      <div className={classes.promocode}>Promocode</div>
      <div className={classes.other2}>
        <Other2Icon className={classes.icon6} />
      </div>
      <div className={classes.options}>Options</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.request}>Request</div>
      <div className={classes.apply}>Apply</div>
      <div className={classes.modalPanel2}>
        <ModalPanelIcon2 className={classes.icon7} />
      </div>
      <div className={classes.rectangle22}></div>
      <div className={classes.cashPayment}>Cash payment</div>
      <div className={classes.rectangle30}></div>
      <div className={classes.giveMoney1}>
        <GiveMoney1Icon className={classes.icon8} />
      </div>
      <div className={classes.group54}>
        <Group54Icon className={classes.icon9} />
      </div>
      <div className={classes.fill1Copy}>
        <Fill1CopyIcon className={classes.icon10} />
      </div>
      <div className={classes.rectangle302}></div>
      <div className={classes.giveMoney12}>
        <GiveMoney1Icon2 className={classes.icon11} />
      </div>
      <div className={classes.rectangle23}></div>
      <div className={classes.confirmTaxi}>Confirm taxi</div>
      <div className={classes.rectangle24}></div>
      <div className={classes.masterCard}>Master Card</div>
      <div className={classes._89}>**** **** **** **89</div>
      <div className={classes.rectangle303}></div>
      <div className={classes.group57}>
        <Group57Icon className={classes.icon12} />
      </div>
      <div className={classes.rectangle}>
        <RectangleIcon className={classes.icon13} />
      </div>
      <div className={classes.star1}>
        <Star1Icon className={classes.icon14} />
      </div>
      <div className={classes.star2}>
        <Star2Icon className={classes.icon15} />
      </div>
      <div className={classes.star3}>
        <Star3Icon className={classes.icon16} />
      </div>
      <div className={classes.star4}>
        <Star4Icon className={classes.icon17} />
      </div>
      <div className={classes.star5}>
        <Star5Icon className={classes.icon18} />
      </div>
      <div className={classes.rectangle31}></div>
      <div className={classes.rateYourRide}>Rate your ride</div>
      <div className={classes.line1}></div>
      <div className={classes.comment}>Comment</div>
    </div>
  );
});
