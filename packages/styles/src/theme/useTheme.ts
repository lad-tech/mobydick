import {useEffect, useState} from 'react';

import {getTheme} from './theme';
import {eventEmitterTheme, IEventEmitterTheme} from './eventEmitter';

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(getTheme);

  useEffect(() => {
    const listener = eventEmitterTheme.addListener(
      IEventEmitterTheme.setCurrentTheme,
      newCurrentTheme => {
        setCurrentTheme({
          currentTheme: newCurrentTheme,
          colors: currentTheme.colors,
        });
      },
    );

    return () => {
      listener.remove();
    };
  }, []);

  return currentTheme;
};

export default useTheme;
