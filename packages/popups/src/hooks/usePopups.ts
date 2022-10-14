import {useContext} from 'react';

import PopupsContext from '../context/PopupsContext';

const usePopups = () => useContext(PopupsContext);

export default usePopups;
