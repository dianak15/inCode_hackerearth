import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './OutlineCommunicationUser.module.css';

interface Props {
  className?: string;
}

export const OutlineCommunicationUser: FC<Props> = memo(function OutlineCommunicationUser(props = {}) {
  return <div className={`${resets.clapyResets} ${classes.root}`}></div>;
});
