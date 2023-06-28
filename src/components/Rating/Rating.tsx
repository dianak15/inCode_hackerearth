import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BatteryIcon } from './BatteryIcon';
import { CellularConnectionIcon } from './CellularConnectionIcon';
import { ModalPanelIcon } from './ModalPanelIcon';
import { ModalPanelIcon2 } from './ModalPanelIcon2';
import { ModalPanelIcon3 } from './ModalPanelIcon3';
import { OutlineGeneralSun } from './OutlineGeneralSun/OutlineGeneralSun';
import classes from './Rating.module.css';
import { RectangleIcon } from './RectangleIcon';
import { Star1Icon } from './Star1Icon';
import { Star2Icon } from './Star2Icon';
import { Star3Icon } from './Star3Icon';
import { Star4Icon } from './Star4Icon';
import { Star5Icon } from './Star5Icon';

interface Props {
  className?: string;
}

export const Rating: FC<Props> = memo(function Rating(props = {}) {
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
      <div className={classes.thankYouForChoosingUs}>Thank You for Choosing Us!</div>
      <div className={classes.image1}></div>
      <div className={classes.star1}>
        <Star1Icon className={classes.icon7} />
      </div>
      <div className={classes.star2}>
        <Star2Icon className={classes.icon8} />
      </div>
      <div className={classes.star3}>
        <Star3Icon className={classes.icon9} />
      </div>
      <div className={classes.star4}>
        <Star4Icon className={classes.icon10} />
      </div>
      <div className={classes.star5}>
        <Star5Icon className={classes.icon11} />
      </div>
      <div className={classes.rectangle31}></div>
      <div className={classes.rateYourRide}>Rate your ride</div>
      <div className={classes.line1}></div>
      <div className={classes.comment}>Comment</div>
      <div className={classes.image2}></div>
    </div>
  );
});
