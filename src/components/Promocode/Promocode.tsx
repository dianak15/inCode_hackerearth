import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BatteryIcon } from './BatteryIcon';
import { CellularConnectionIcon } from './CellularConnectionIcon';
import { ColorTitleTextLightGray2 } from './ColorTitleTextLightGray2/ColorTitleTextLightGray2';
import { GiveMoney1Icon } from './GiveMoney1Icon';
import { ModalPanelIcon } from './ModalPanelIcon';
import { ModalPanelIcon2 } from './ModalPanelIcon2';
import { Other2Icon } from './Other2Icon';
import classes from './Promocode.module.css';
import { RectangleIcon } from './RectangleIcon';
import { TicketIcon } from './TicketIcon';
import { TicketIcon2 } from './TicketIcon2';
import { WalletIcon } from './WalletIcon';

interface Props {
  className?: string;
  hide?: {
    colorTitleTextLightGray?: boolean;
  };
}

export const Promocode: FC<Props> = memo(function Promocode(props = {}) {
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
      <div className={classes.ticket2}>
        <TicketIcon2 className={classes.icon8} />
      </div>
      <div className={classes.enterPromocodeHere}>Enter promocode here</div>
      <div className={classes.rectangle23}></div>
      <div className={classes.applyPromocode}>Apply promocode</div>
      <div className={classes.rectangle30}></div>
      <div className={classes.giveMoney1}>
        <GiveMoney1Icon className={classes.icon9} />
      </div>
      <div className={classes.rectangle232}></div>
      <div className={classes.confirmTaxi}>Confirm taxi</div>
      <div className={classes.rectangle}>
        <RectangleIcon className={classes.icon10} />
      </div>
      <div className={classes.image2}></div>
    </div>
  );
});
