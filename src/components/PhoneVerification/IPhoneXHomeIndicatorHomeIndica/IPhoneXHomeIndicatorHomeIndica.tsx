import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IPhoneXHomeIndicatorHomeIndica.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    rectangle24?: string;
  };
}

export const IPhoneXHomeIndicatorHomeIndica: FC<Props> = memo(function IPhoneXHomeIndicatorHomeIndica(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle24 || ''} ${classes.rectangle24}`}></div>
    </div>
  );
});
