import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SystemKeyboardsIPhoneXXLightBa.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}

export const SystemKeyboardsIPhoneXXLightBa: FC<Props> = memo(function SystemKeyboardsIPhoneXXLightBa(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.background}></div>
    </div>
  );
});
