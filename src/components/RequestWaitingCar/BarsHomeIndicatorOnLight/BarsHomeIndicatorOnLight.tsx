import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BarsHomeIndicatorOnLight.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}

export const BarsHomeIndicatorOnLight: FC<Props> = memo(function BarsHomeIndicatorOnLight(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.homeIndicator}></div>
    </div>
  );
});
