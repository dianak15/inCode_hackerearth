import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IconMicrophone } from '../IconMicrophone/IconMicrophone';
import { Ellipse4Icon } from './Ellipse4Icon';
import classes from './VoiceFab.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}

export const VoiceFab: FC<Props> = memo(function VoiceFab(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse4}>
        <Ellipse4Icon className={classes.icon} />
      </div>
      <IconMicrophone className={classes.iconMicrophone} />
    </div>
  );
});
