import {useEffect, useState} from 'react';

import {
  getCurrentColors,
  getCurrentTheme,
  getSpaces,
  ICurrentTheme,
} from './theme';
import {eventEmitterTheme, IEventEmitterTheme} from './eventEmitter';

interface IUseTheme {
  colors: ReturnType<typeof getCurrentColors>;
  spaces: ReturnType<typeof getSpaces>;
  currentTheme: ICurrentTheme;
}
const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<IUseTheme>(() => ({
    colors: getCurrentColors(),
    currentTheme: getCurrentTheme(),
    spaces: getSpaces(),
  }));

  useEffect(() => {
    const listener = eventEmitterTheme.addListener(
      IEventEmitterTheme.setCurrentTheme,
      newCurrentTheme => {
        setCurrentTheme(() => ({
          currentTheme: newCurrentTheme,
          colors: getCurrentColors(),
          spaces: currentTheme.spaces,
        }));
      },
    );

    return () => {
      listener.remove();
    };
  }, []);

  return currentTheme;
};

export default useTheme;
