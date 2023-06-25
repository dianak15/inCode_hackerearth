import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './OutlineCommunicationEnvelope.module.css';
import { OutlineCommunicationEnvelopeIc } from './OutlineCommunicationEnvelopeIc';

interface Props {
  className?: string;
}
/* @figmaId 52:757 */
export const OutlineCommunicationEnvelope: FC<Props> = memo(function OutlineCommunicationEnvelope(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>
        <OutlineCommunicationEnvelopeIc className={classes.icon2} />
      </div>
    </div>
  );
});
