import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconMicrophone } from '../IconMicrophone/IconMicrophone';
import { Ellipse4Icon } from './Ellipse4Icon';
import classes from './VoiceFab.module.css';

interface Props {
  className?: string;
  classes?: {
    microphone?: string;
    root?: string;
  };
  swap?: {
    ellipse4?: ReactNode;
    microphone?: ReactNode;
  };
}

export const VoiceFab: FC<Props> = memo(function VoiceFab(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse4}>{props.swap?.ellipse4 || <Ellipse4Icon className={classes.icon} />}</div>
      <IconMicrophone
        className={classes.iconMicrophone}
        classes={{ microphone: props.classes?.microphone || '' }}
        swap={{
          microphone: props.swap?.microphone,
        }}
      />
    </div>
  );
});
