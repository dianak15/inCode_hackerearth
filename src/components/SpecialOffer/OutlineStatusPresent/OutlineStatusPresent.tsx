import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './OutlineStatusPresent.module.css';
import { OutlineStatusPresentIcon } from './OutlineStatusPresentIcon';

interface Props {
  className?: string;
}

export const OutlineStatusPresent: FC<Props> = memo(function OutlineStatusPresent(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>
        <OutlineStatusPresentIcon className={classes.icon2} />
      </div>
    </div>
  );
});
