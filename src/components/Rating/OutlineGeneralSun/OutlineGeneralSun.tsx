import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './OutlineGeneralSun.module.css';
import { OutlineGeneralSunIcon } from './OutlineGeneralSunIcon';

interface Props {
  className?: string;
}

export const OutlineGeneralSun: FC<Props> = memo(function OutlineGeneralSun(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>
        <OutlineGeneralSunIcon className={classes.icon2} />
      </div>
    </div>
  );
});
