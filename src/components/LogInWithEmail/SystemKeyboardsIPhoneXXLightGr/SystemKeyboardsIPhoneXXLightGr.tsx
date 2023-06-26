import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SystemKeyboardsIPhoneXXLightGr.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    rectangle?: string;
  };
}
/* @figmaId 29:406 */
export const SystemKeyboardsIPhoneXXLightGr: FC<Props> = memo(function SystemKeyboardsIPhoneXXLightGr(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle || ''} ${classes.rectangle}`}></div>
      <div className={classes.Label}>Go</div>
    </div>
  );
});
