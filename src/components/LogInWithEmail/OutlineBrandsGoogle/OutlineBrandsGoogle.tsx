import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './OutlineBrandsGoogle.module.css';
import { OutlineBrandsGoogleIcon } from './OutlineBrandsGoogleIcon';

interface Props {
  className?: string;
}
/* @figmaId 29:242 */
export const OutlineBrandsGoogle: FC<Props> = memo(function OutlineBrandsGoogle(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>
        <OutlineBrandsGoogleIcon className={classes.icon2} />
      </div>
    </div>
  );
});
