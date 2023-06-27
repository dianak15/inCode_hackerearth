import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BatteryIcon } from './BatteryIcon';
import classes from './CallService.module.css';
import { CellularConnectionIcon } from './CellularConnectionIcon';
import { Group100Icon } from './Group100Icon';
import { Group101Icon } from './Group101Icon';
import { Group102Icon } from './Group102Icon';
import { RectangleIcon } from './RectangleIcon';

interface Props {
  className?: string;
}

export const CallService: FC<Props> = memo(function CallService(props = {}) {
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
      <div className={classes.group101}>
        <Group101Icon className={classes.icon4} />
      </div>
      <div className={classes.group100}>
        <Group100Icon className={classes.icon5} />
      </div>
      <div className={classes.ringing}>Ringing...</div>
      <div className={classes.avatar}></div>
      <div className={classes.aliYurt}>Ali Yurt</div>
      <div className={classes.group102}>
        <Group102Icon className={classes.icon6} />
      </div>
      <div className={classes.image2}></div>
    </div>
  );
});
