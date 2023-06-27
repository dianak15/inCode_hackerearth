import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './OutlineStatusDiamond.module.css';
import { OutlineStatusDiamondIcon } from './OutlineStatusDiamondIcon';

interface Props {
  className?: string;
}

export const OutlineStatusDiamond: FC<Props> = memo(function OutlineStatusDiamond(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>
        <OutlineStatusDiamondIcon className={classes.icon2} />
      </div>
    </div>
  );
});
