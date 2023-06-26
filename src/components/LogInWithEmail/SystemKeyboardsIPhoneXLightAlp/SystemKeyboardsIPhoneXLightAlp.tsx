import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BarsHomeIndicatorOnLight } from '../BarsHomeIndicatorOnLight/BarsHomeIndicatorOnLight';
import { SystemKeyboardsIPhoneXXLightBa } from '../SystemKeyboardsIPhoneXXLightBa/SystemKeyboardsIPhoneXXLightBa';
import { SystemKeyboardsIPhoneXXLightGr2 } from '../SystemKeyboardsIPhoneXXLightGr2/SystemKeyboardsIPhoneXXLightGr2';
import { SystemKeyboardsIPhoneXXLightGr } from '../SystemKeyboardsIPhoneXXLightGr/SystemKeyboardsIPhoneXXLightGr';
import { SystemKeyboardsIPhoneXXLightLa } from '../SystemKeyboardsIPhoneXXLightLa/SystemKeyboardsIPhoneXXLightLa';
import { SystemKeyboardsIPhoneXXLightSm } from '../SystemKeyboardsIPhoneXXLightSm/SystemKeyboardsIPhoneXXLightSm';
import { DeleteButtonIcon } from './DeleteButtonIcon';
import { DictationIcon } from './DictationIcon';
import { EmojiIcon } from './EmojiIcon';
import { ShiftIcon } from './ShiftIcon';
import classes from './SystemKeyboardsIPhoneXLightAlp.module.css';

interface Props {
  className?: string;
  classes?: {
    homeIndicator2?: string;
    dictation?: string;
    emoji?: string;
    rectangle?: string;
    rectangle2?: string;
    rectangle3?: string;
    rectangle4?: string;
    deleteButton?: string;
    rectangle5?: string;
    rectangle6?: string;
    rectangle7?: string;
    rectangle8?: string;
    rectangle9?: string;
    rectangle10?: string;
    rectangle11?: string;
    rectangle12?: string;
    rectangle13?: string;
    rectangle14?: string;
    rectangle15?: string;
    rectangle16?: string;
    rectangle17?: string;
    rectangle18?: string;
    rectangle19?: string;
    rectangle20?: string;
    rectangle21?: string;
    rectangle22?: string;
    rectangle23?: string;
    rectangle24?: string;
    rectangle25?: string;
    rectangle26?: string;
    rectangle27?: string;
    rectangle28?: string;
    rectangle29?: string;
    rectangle30?: string;
    rectangle31?: string;
    root?: string;
  };
  swap?: {
    dictation?: ReactNode;
    emoji?: ReactNode;
    deleteButton?: ReactNode;
    shift?: ReactNode;
  };
}

export const SystemKeyboardsIPhoneXLightAlp: FC<Props> = memo(function SystemKeyboardsIPhoneXLightAlp(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <SystemKeyboardsIPhoneXXLightBa className={classes.background} />
      <BarsHomeIndicatorOnLight
        className={classes.homeIndicator}
        classes={{ homeIndicator: props.classes?.homeIndicator2 || '' }}
      />
      <div className={`${props.classes?.dictation || ''} ${classes.dictation}`}>
        {props.swap?.dictation || <DictationIcon className={classes.icon} />}
      </div>
      <div className={`${props.classes?.emoji || ''} ${classes.emoji}`}>
        {props.swap?.emoji || <EmojiIcon className={classes.icon2} />}
      </div>
      <SystemKeyboardsIPhoneXXLightGr
        className={classes.return}
        classes={{ rectangle: props.classes?.rectangle || '' }}
      />
      <SystemKeyboardsIPhoneXXLightSm
        className={classes.space}
        classes={{ rectangle: props.classes?.rectangle2 || '' }}
        text={{
          Label: <div className={classes.Label}>space</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightGr2
        className={classes._123}
        classes={{ rectangle: props.classes?.rectangle3 || '' }}
        text={{
          Label: <div className={classes.Label2}>123</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightGr2
        className={classes.keyLight}
        classes={{ rectangle: props.classes?.rectangle4 || '' }}
        text={{
          Label: <div className={classes.Label3}> </div>,
        }}
      />
      <div className={`${props.classes?.deleteButton || ''} ${classes.deleteButton}`}>
        {props.swap?.deleteButton || <DeleteButtonIcon className={classes.icon3} />}
      </div>
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.keyLight2}
        classes={{ rectangle: props.classes?.rectangle5 || '' }}
        text={{
          symbol: <div className={classes.symbol}> </div>,
        }}
      />
      <div className={classes.shift}>{props.swap?.shift || <ShiftIcon className={classes.icon4} />}</div>
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.m}
        classes={{ rectangle: props.classes?.rectangle6 || '' }}
        text={{
          symbol: <div className={classes.symbol2}>M</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.n}
        classes={{ rectangle: props.classes?.rectangle7 || '' }}
        text={{
          symbol: <div className={classes.symbol3}>N</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.b}
        classes={{ rectangle: props.classes?.rectangle8 || '' }}
        text={{
          symbol: <div className={classes.symbol4}>B</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.v}
        classes={{ rectangle: props.classes?.rectangle9 || '' }}
        text={{
          symbol: <div className={classes.symbol5}>V</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.c}
        classes={{ rectangle: props.classes?.rectangle10 || '' }}
        text={{
          symbol: <div className={classes.symbol6}>C</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.x}
        classes={{ rectangle: props.classes?.rectangle11 || '' }}
        text={{
          symbol: <div className={classes.symbol7}>X</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.z}
        classes={{ rectangle: props.classes?.rectangle12 || '' }}
        text={{
          symbol: <div className={classes.symbol8}>Z</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.l}
        classes={{ rectangle: props.classes?.rectangle13 || '' }}
        text={{
          symbol: <div className={classes.symbol9}>L</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.k}
        classes={{ rectangle: props.classes?.rectangle14 || '' }}
        text={{
          symbol: <div className={classes.symbol10}>K</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.j}
        classes={{ rectangle: props.classes?.rectangle15 || '' }}
        text={{
          symbol: <div className={classes.symbol11}>J</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.h}
        classes={{ rectangle: props.classes?.rectangle16 || '' }}
        text={{
          symbol: <div className={classes.symbol12}>H</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.g}
        classes={{ rectangle: props.classes?.rectangle17 || '' }}
        text={{
          symbol: <div className={classes.symbol13}>G</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.f}
        classes={{ rectangle: props.classes?.rectangle18 || '' }}
        text={{
          symbol: <div className={classes.symbol14}>F</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.d}
        classes={{ rectangle: props.classes?.rectangle19 || '' }}
        text={{
          symbol: <div className={classes.symbol15}>D</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.s}
        classes={{ rectangle: props.classes?.rectangle20 || '' }}
        text={{
          symbol: <div className={classes.symbol16}>S</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.a}
        classes={{ rectangle: props.classes?.rectangle21 || '' }}
        text={{
          symbol: <div className={classes.symbol17}>A</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.p}
        classes={{ rectangle: props.classes?.rectangle22 || '' }}
        text={{
          symbol: <div className={classes.symbol18}>P</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.o}
        classes={{ rectangle: props.classes?.rectangle23 || '' }}
        text={{
          symbol: <div className={classes.symbol19}>O</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.i}
        classes={{ rectangle: props.classes?.rectangle24 || '' }}
        text={{
          symbol: <div className={classes.symbol20}>I</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.u}
        classes={{ rectangle: props.classes?.rectangle25 || '' }}
        text={{
          symbol: <div className={classes.symbol21}>U</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.y}
        classes={{ rectangle: props.classes?.rectangle26 || '' }}
        text={{
          symbol: <div className={classes.symbol22}>Y</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.t}
        classes={{ rectangle: props.classes?.rectangle27 || '' }}
        text={{
          symbol: <div className={classes.symbol23}>T</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.r}
        classes={{ rectangle: props.classes?.rectangle28 || '' }}
        text={{
          symbol: <div className={classes.symbol24}>R</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.e}
        classes={{ rectangle: props.classes?.rectangle29 || '' }}
        text={{
          symbol: <div className={classes.symbol25}>E</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa
        className={classes.w}
        classes={{ rectangle: props.classes?.rectangle30 || '' }}
        text={{
          symbol: <div className={classes.symbol26}>W</div>,
        }}
      />
      <SystemKeyboardsIPhoneXXLightLa className={classes.q} classes={{ rectangle: props.classes?.rectangle31 || '' }} />
    </div>
  );
});
