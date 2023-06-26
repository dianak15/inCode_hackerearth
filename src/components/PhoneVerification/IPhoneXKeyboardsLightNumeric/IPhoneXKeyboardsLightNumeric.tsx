import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IPhoneXHomeIndicatorHomeIndica } from '../IPhoneXHomeIndicatorHomeIndica/IPhoneXHomeIndicatorHomeIndica';
import { DeleteIcon } from './DeleteIcon';
import { DictationIcon } from './DictationIcon';
import { DictationIcon2 } from './DictationIcon2';
import classes from './IPhoneXKeyboardsLightNumeric.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle24?: string;
    dictation?: string;
    dictation2?: string;
    delete?: string;
    root?: string;
  };
  swap?: {
    dictation?: ReactNode;
    dictation2?: ReactNode;
    delete?: ReactNode;
  };
}
/* @figmaId 29:94 */
export const IPhoneXKeyboardsLightNumeric: FC<Props> = memo(function IPhoneXKeyboardsLightNumeric(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.background}></div>
      <IPhoneXHomeIndicatorHomeIndica
        className={classes.iPhoneXHomeIndicatorHomeIndica}
        classes={{ rectangle24: props.classes?.rectangle24 || '' }}
      />
      <div className={`${props.classes?.dictation || ''} ${classes.dictation}`}>
        {props.swap?.dictation || <DictationIcon className={classes.icon} />}
      </div>
      <div className={`${props.classes?.dictation2 || ''} ${classes.dictation2}`}>
        {props.swap?.dictation2 || <DictationIcon2 className={classes.icon2} />}
      </div>
      <div className={`${props.classes?.delete || ''} ${classes.delete}`}>
        {props.swap?.delete || <DeleteIcon className={classes.icon3} />}
      </div>
      <div className={classes.keyBackground}></div>
      <div className={classes.unnamed}>0</div>
      <div className={classes.keyBackground2}></div>
      <div className={classes.aBC}>WXYZ</div>
      <div className={classes.unnamed2}>9</div>
      <div className={classes.keyBackground3}></div>
      <div className={classes.aBC2}>TUV</div>
      <div className={classes.unnamed3}>8</div>
      <div className={classes.rectangle}></div>
      <div className={classes.aBC3}>PGRS</div>
      <div className={classes.unnamed4}>7</div>
      <div className={classes.keyBackground4}></div>
      <div className={classes.aBC4}>MNO</div>
      <div className={classes.unnamed5}>6</div>
      <div className={classes.keyBackground5}></div>
      <div className={classes.aBC5}>JKL</div>
      <div className={classes.unnamed6}>5</div>
      <div className={classes.keyBackground6}></div>
      <div className={classes.aBC6}>GHI</div>
      <div className={classes.unnamed7}>4</div>
      <div className={classes.keyBackground7}></div>
      <div className={classes.aBC7}>DEF</div>
      <div className={classes.unnamed8}>3</div>
      <div className={classes.keyBackground8}></div>
      <div className={classes.aBC8}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>AB</span>
          <span className={classes.label2}>C</span>
        </p>
      </div>
      <div className={classes.unnamed9}>2</div>
      <div className={classes.keyBackground9}></div>
      <div className={classes.unnamed10}>1</div>
    </div>
  );
});
