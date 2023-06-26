import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { OutlineCommunicationEnvelopeOp2 } from './OutlineCommunicationEnvelopeOp2';
import classes from './OutlineCommunicationEnvelopeOp.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}

export const OutlineCommunicationEnvelopeOp: FC<Props> = memo(function OutlineCommunicationEnvelopeOp(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>
        <OutlineCommunicationEnvelopeOp2 className={classes.icon2} />
      </div>
    </div>
  );
});
