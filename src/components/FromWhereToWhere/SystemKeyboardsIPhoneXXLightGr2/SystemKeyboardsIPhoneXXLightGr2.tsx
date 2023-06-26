import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './SystemKeyboardsIPhoneXXLightGr2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    rectangle?: string;
  };
  text?: {
    Label?: ReactNode;
  };
}

export const SystemKeyboardsIPhoneXXLightGr2: FC<Props> = memo(function SystemKeyboardsIPhoneXXLightGr2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle || ''} ${classes.rectangle}`}></div>
      {props.text?.Label != null ? props.text?.Label : <div className={classes.Label}>s</div>}
    </div>
  );
});
