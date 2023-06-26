import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconMicrophone.module.css';
import { MicrophoneIcon } from './MicrophoneIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    microphone?: string;
  };
  swap?: {
    microphone?: ReactNode;
  };
}

export const IconMicrophone: FC<Props> = memo(function IconMicrophone(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.microphone || ''} ${classes.microphone}`}>
        {props.swap?.microphone || <MicrophoneIcon className={classes.icon} />}
      </div>
      <div className={classes.rectangle389}></div>
    </div>
  );
});
