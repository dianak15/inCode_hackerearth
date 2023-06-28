import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BatteryIcon } from './BatteryIcon';
import { Bell1Icon } from './Bell1Icon';
import { CellularConnectionIcon } from './CellularConnectionIcon';
import classes from './DriverUserInterface.module.css';
import { Group29Icon } from './Group29Icon';
import { ModalPanelIcon } from './ModalPanelIcon';
import { ModalPanelIcon2 } from './ModalPanelIcon2';
import { ModalPanelIcon3 } from './ModalPanelIcon3';
import { OutlineGeneralSun } from './OutlineGeneralSun/OutlineGeneralSun';

interface Props {
  className?: string;
}

export const DriverUserInterface: FC<Props> = memo(function DriverUserInterface(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.maps}></div>
      <div className={classes.battery}>
        <BatteryIcon className={classes.icon} />
      </div>
      <div className={classes.cellularConnection}>
        <CellularConnectionIcon className={classes.icon2} />
      </div>
      <div className={classes.newYork}>New York</div>
      <div className={classes.group29}>
        <Group29Icon className={classes.icon3} />
      </div>
      <div className={classes.modalPanel}>
        <ModalPanelIcon className={classes.icon4} />
      </div>
      <div className={classes.modalPanel2}>
        <ModalPanelIcon2 className={classes.icon5} />
      </div>
      <OutlineGeneralSun className={classes.outlineGeneralSun} />
      <div className={classes.modalPanel3}>
        <ModalPanelIcon3 className={classes.icon6} />
      </div>
      <div className={classes.a}>A</div>
      <div className={classes.bell1}>
        <Bell1Icon className={classes.icon7} />
      </div>
    </div>
  );
});
