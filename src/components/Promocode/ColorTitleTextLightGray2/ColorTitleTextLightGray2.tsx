import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ColorTitleTextLightGray2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    colorTitleTextLightGray?: boolean;
  };
}

export const ColorTitleTextLightGray2: FC<Props> = memo(function ColorTitleTextLightGray2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.colorTitleTextLightGray && <div className={classes.colorTitleTextLightGray}></div>}
    </div>
  );
});
