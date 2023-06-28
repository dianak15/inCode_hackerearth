import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BatteryIcon } from './BatteryIcon';
import { Bell1Icon } from './Bell1Icon';
import { CellularConnectionIcon } from './CellularConnectionIcon';
import classes from './DriverConfirm.module.css';
import { ModalPanelIcon } from './ModalPanelIcon';
import { ModalPanelIcon2 } from './ModalPanelIcon2';
import { ModalPanelIcon3 } from './ModalPanelIcon3';
import { ModalPanelIcon4 } from './ModalPanelIcon4';
import { ModalPanelIcon5 } from './ModalPanelIcon5';
import { OutlineGeneralSun } from './OutlineGeneralSun/OutlineGeneralSun';
import { RectangleIcon } from './RectangleIcon';

interface Props {
  className?: string;
}

export const DriverConfirm: FC<Props> = memo(function DriverConfirm(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.battery}>
        <BatteryIcon className={classes.icon} />
      </div>
      <div className={classes.cellularConnection}>
        <CellularConnectionIcon className={classes.icon2} />
      </div>
      <div className={classes.newYork}>New York</div>
      <div className={classes.modalPanel}>
        <ModalPanelIcon className={classes.icon3} />
      </div>
      <div className={classes.modalPanel2}>
        <ModalPanelIcon2 className={classes.icon4} />
      </div>
      <OutlineGeneralSun className={classes.outlineGeneralSun} />
      <div className={classes.modalPanel3}>
        <ModalPanelIcon3 className={classes.icon5} />
      </div>
      <div className={classes.a}>A</div>
      <div className={classes.bell1}>
        <Bell1Icon className={classes.icon6} />
      </div>
      <div className={classes.image1}></div>
      <div className={classes.confirm}>Confirm?</div>
      <div className={classes.youHaveARideRequestFromMissCho}>
        You have a ride request from Miss Chocolate. Please pick her request now. Otherwise, press cancel.
      </div>
      <div className={classes.pleaseExplainTheReasonOfCancel}>
        Please, explain the reason of cancel in the Comments.
      </div>
      <div className={classes.modalPanel4}>
        <ModalPanelIcon4 className={classes.icon7} />
      </div>
      <div className={classes.accept}>Accept</div>
      <div className={classes.modalPanel5}>
        <ModalPanelIcon5 className={classes.icon8} />
      </div>
      <div className={classes.decline}>Decline</div>
      <div className={classes.line1}></div>
      <div className={classes.comment}>Comment</div>
      <div className={classes.image2}></div>
      <div className={classes.rectangle}>
        <RectangleIcon className={classes.icon9} />
      </div>
    </div>
  );
});
