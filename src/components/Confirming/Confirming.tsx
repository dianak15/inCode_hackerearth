import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BatteryIcon } from './BatteryIcon';
import { CellularConnectionIcon } from './CellularConnectionIcon';
import classes from './Confirming.module.css';
import { Ellipse1Icon } from './Ellipse1Icon';
import { ModalPanelIcon } from './ModalPanelIcon';
import { ModalPanelIcon2 } from './ModalPanelIcon2';
import { ModalPanelIcon3 } from './ModalPanelIcon3';
import { OutlineGeneralSun } from './OutlineGeneralSun/OutlineGeneralSun';
import { OutlineInterfaceCheck } from './OutlineInterfaceCheck/OutlineInterfaceCheck';
import { RectangleIcon } from './RectangleIcon';

interface Props {
  className?: string;
}

export const Confirming: FC<Props> = memo(function Confirming(props = {}) {
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
      <div className={classes.image2}></div>
      <div className={classes._60}>06:00</div>
      <div className={classes.rectangle1}></div>
      <div className={classes.confirmYourDriver}>Confirm Your Driver</div>
      <div className={classes.safeAndCheapRide}>Safe and cheap ride.</div>
      <div className={classes.fastAndReliable}>Fast and reliable.</div>
      <div className={classes.rectangle23}></div>
      <div className={classes.cONFIRM}>CONFIRM</div>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon7} />
      </div>
      <OutlineInterfaceCheck />
    </div>
  );
});
