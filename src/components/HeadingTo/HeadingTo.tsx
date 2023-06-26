import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Arrow1Icon } from './Arrow1Icon';
import { BatteryIcon } from './BatteryIcon';
import { CarBlackSideSilhouetteIcon } from './CarBlackSideSilhouetteIcon';
import { CarBlackSideSilhouetteIcon2 } from './CarBlackSideSilhouetteIcon2';
import { CarBlackSideSilhouetteIcon3 } from './CarBlackSideSilhouetteIcon3';
import { CellularConnectionIcon } from './CellularConnectionIcon';
import { ConvertibleIcon } from './ConvertibleIcon';
import classes from './HeadingTo.module.css';
import { Ic_currentIcon } from './Ic_currentIcon';
import { Ic_locationIcon } from './Ic_locationIcon';
import { MinivanCarIcon } from './MinivanCarIcon';
import { ModalPanelIcon } from './ModalPanelIcon';
import { SingleMotorbikeIcon } from './SingleMotorbikeIcon';
import { VanBlackTransportSideViewPoint } from './VanBlackTransportSideViewPoint';
import { VoiceFab } from './VoiceFab/VoiceFab';

interface Props {
  className?: string;
}

export const HeadingTo: FC<Props> = memo(function HeadingTo(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.maps}></div>
      <div className={classes.battery}>
        <BatteryIcon className={classes.icon} />
      </div>
      <div className={classes.cellularConnection}>
        <CellularConnectionIcon className={classes.icon2} />
      </div>
      <div className={classes.tOWHERE}>TO WHERE</div>
      <div className={classes.fROMWHERE}>FROM WHERE</div>
      <div className={classes.ic_Location}>
        <Ic_locationIcon className={classes.icon3} />
      </div>
      <div className={classes.ic_current}>
        <Ic_currentIcon className={classes.icon4} />
      </div>
      <div className={classes.rectangle14}></div>
      <div className={classes.service}>Service</div>
      <div className={classes._4Min}>4 min.</div>
      <div className={classes.rectangle390}></div>
      <div className={classes.avatar}></div>
      <div className={classes.modalPanel}>
        <ModalPanelIcon className={classes.icon5} />
      </div>
      <div className={classes.rectangle142}></div>
      <div className={classes.whereAreYouHeadingTo}>Where are you heading to?</div>
      <div className={classes.rectangle391}></div>
      <div className={classes.arrow1}>
        <Arrow1Icon className={classes.icon6} />
      </div>
      <VoiceFab className={classes.voiceFab} />
      <div className={classes.vanBlackTransportSideViewPoint}>
        <VanBlackTransportSideViewPoint className={classes.icon7} />
      </div>
      <div className={classes.convertible}>
        <ConvertibleIcon className={classes.icon8} />
      </div>
      <div className={classes.carBlackSideSilhouette}>
        <CarBlackSideSilhouetteIcon className={classes.icon9} />
      </div>
      <div className={classes.carBlackSideSilhouette2}>
        <CarBlackSideSilhouetteIcon2 className={classes.icon10} />
      </div>
      <div className={classes.rectangle2}></div>
      <div className={classes.whiteChurch}>White Church</div>
      <div className={classes.rectangle22}></div>
      <div className={classes.cinemaPark}>Cinema Park</div>
      <div className={classes.rectangle23}></div>
      <div className={classes.northStreet}>North Street</div>
      <div className={classes.avatar2}></div>
      <div className={classes.avatar3}></div>
      <div className={classes.avatar4}></div>
      <div className={classes.avatar5}></div>
      <div className={classes.avatar6}></div>
      <div className={classes.avatar7}></div>
      <div className={classes.avatar8}></div>
      <div className={classes.avatar9}></div>
      <div className={classes.minivanCar}>
        <MinivanCarIcon className={classes.icon11} />
      </div>
      <div className={classes.singleMotorbike}>
        <SingleMotorbikeIcon className={classes.icon12} />
      </div>
      <div className={classes.carBlackSideSilhouette3}>
        <CarBlackSideSilhouetteIcon3 className={classes.icon13} />
      </div>
      <div className={classes.rectangle393}></div>
      <div className={classes.rectangle394}></div>
      <div className={classes.taxiThatAroundYou}>Taxi that around you</div>
      <div className={classes.avatar10}></div>
    </div>
  );
});
