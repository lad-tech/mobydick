import {useEffect, useState} from 'react';

import {getCurrentColors, getCurrentTheme} from './theme';
import {eventEmitterTheme, IEventEmitterTheme} from './eventEmitter';

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(getCurrentTheme);

  useEffect(() => {
    const listener = eventEmitterTheme.addListener(
      IEventEmitterTheme.setCurrentTheme,
      () => {
        setCurrentTheme(getCurrentTheme);
      },
    );

    return () => {
      listener.remove();
    };
  }, [currentTheme]);

  return {
    currentTheme,
    ...getCurrentColors(),
  };
};

export default useTheme;
