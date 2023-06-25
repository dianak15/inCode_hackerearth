import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.Confirming.module.css';
import resets from './components/_resets.module.css';
import { Confirming } from './components/Confirming/Confirming';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Confirming />
    </div>
  );
});
