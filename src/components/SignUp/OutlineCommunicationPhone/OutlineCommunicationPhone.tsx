import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './OutlineCommunicationPhone.module.css';
import { OutlineCommunicationPhoneIcon } from './OutlineCommunicationPhoneIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}

export const OutlineCommunicationPhone: FC<Props> = memo(function OutlineCommunicationPhone(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>
        {props.swap?.icon || <OutlineCommunicationPhoneIcon className={classes.icon2} />}
      </div>
    </div>
  );
});
