import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './OutlineInterfaceCheck.module.css';
import { OutlineInterfaceCheckIcon } from './OutlineInterfaceCheckIcon';

interface Props {
  className?: string;
}

export const OutlineInterfaceCheck: FC<Props> = memo(function OutlineInterfaceCheck(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>
        <OutlineInterfaceCheckIcon className={classes.icon2} />
      </div>
    </div>
  );
});
