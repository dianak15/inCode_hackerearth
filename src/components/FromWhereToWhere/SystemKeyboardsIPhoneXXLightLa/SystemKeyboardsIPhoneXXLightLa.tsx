import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './SystemKeyboardsIPhoneXXLightLa.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    rectangle?: string;
  };
  text?: {
    symbol?: ReactNode;
  };
}

export const SystemKeyboardsIPhoneXXLightLa: FC<Props> = memo(function SystemKeyboardsIPhoneXXLightLa(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle || ''} ${classes.rectangle}`}></div>
      {props.text?.symbol != null ? props.text?.symbol : <div className={classes.symbol}>Q</div>}
    </div>
  );
});
