import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './OutlineCommunicationChat.module.css';
import { OutlineCommunicationChatIcon } from './OutlineCommunicationChatIcon';

interface Props {
  className?: string;
}

export const OutlineCommunicationChat: FC<Props> = memo(function OutlineCommunicationChat(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>
        <OutlineCommunicationChatIcon className={classes.icon2} />
      </div>
    </div>
  );
});
