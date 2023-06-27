import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './OutlineStatusAward.module.css';
import { OutlineStatusAwardIcon } from './OutlineStatusAwardIcon';

interface Props {
  className?: string;
}

export const OutlineStatusAward: FC<Props> = memo(function OutlineStatusAward(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>
        <OutlineStatusAwardIcon className={classes.icon2} />
      </div>
    </div>
  );
});
