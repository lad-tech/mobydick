import {useContext} from 'react';

import ThemeContext from '../context/context';

const useTheme = () => useContext(ThemeContext);

export default useTheme;
