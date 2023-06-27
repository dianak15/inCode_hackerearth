import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BackIcon } from './BackIcon';
import { BarsHomeIndicatorOnLight } from './BarsHomeIndicatorOnLight/BarsHomeIndicatorOnLight';
import { BatteryIcon } from './BatteryIcon';
import { CarsIcon } from './CarsIcon';
import { CellularConnectionIcon } from './CellularConnectionIcon';
import { MinivanCarIcon } from './MinivanCarIcon';
import { MinivanCarIcon2 } from './MinivanCarIcon2';
import { MinivanCarIcon3 } from './MinivanCarIcon3';
import { MinivanCarIcon4 } from './MinivanCarIcon4';
import { MinivanCarIcon5 } from './MinivanCarIcon5';
import { PathIcon } from './PathIcon';
import classes from './RequestWaitingCar.module.css';
import { ShapeIcon } from './ShapeIcon';

interface Props {
  className?: string;
}

export const RequestWaitingCar: FC<Props> = memo(function RequestWaitingCar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.battery}>
        <BatteryIcon className={classes.icon} />
      </div>
      <div className={classes.cellularConnection}>
        <CellularConnectionIcon className={classes.icon2} />
      </div>
      <div className={classes.tOWHERE}>TO WHERE</div>
      <div className={classes.fROMWHERE}>FROM WHERE</div>
      <div className={classes.chooseVehicleType_FullView}>
        <div className={classes.maps}></div>
        <div className={classes.circle}></div>
        <div className={classes.back}>
          <BackIcon className={classes.icon3} />
        </div>
        <div className={classes.path}>
          <PathIcon className={classes.icon4} />
        </div>
        <div className={classes.cars}>
          <CarsIcon className={classes.icon5} />
        </div>
        <BarsHomeIndicatorOnLight className={classes.barsHomeIndicatorOnLight} />
        <div className={classes.rectangle14}></div>
        <div className={classes.weFoundSuitableCarForYou}>We found suitable car for you</div>
        <div className={classes.shape}>
          <ShapeIcon className={classes.icon6} />
        </div>
        <div className={classes.rectangle15}></div>
        <div className={classes.carIsWaiting}>Car is waiting...</div>
        <div className={classes.minivanCar}>
          <MinivanCarIcon className={classes.icon7} />
        </div>
        <div className={classes._7SeatTaxi}>“7-seat” taxi</div>
        <div className={classes.uS787XYZ}>US 787 XYZ</div>
        <div className={classes._3Minutes}>3 minutes. </div>
        <div className={classes.vehicleNumber}>Vehicle number:</div>
        <div className={classes.arrivesIn}>Arrives in:</div>
        <div className={classes.minivanCar2}>
          <MinivanCarIcon2 className={classes.icon8} />
        </div>
        <div className={classes.minivanCar3}>
          <MinivanCarIcon3 className={classes.icon9} />
        </div>
        <div className={classes.minivanCar4}>
          <MinivanCarIcon4 className={classes.icon10} />
        </div>
        <div className={classes.minivanCar5}>
          <MinivanCarIcon5 className={classes.icon11} />
        </div>
        <div className={classes.rectangle16}></div>
        <div className={classes.iNeedExtraTime}>I need extra time</div>
        <div className={classes.rectangle17}></div>
        <div className={classes.cost}>Cost:</div>
        <div className={classes._50}>$50</div>
        <div className={classes.iNeedEconomTaxi}>I need “Econom” taxi</div>
        <div className={classes.rectangle18}></div>
        <div className={classes.iNeedHelpWithBuggage}>I need help with buggage</div>
        <div className={classes.rectangle2}></div>
        <div className={classes.request}>Request</div>
      </div>
    </div>
  );
});
