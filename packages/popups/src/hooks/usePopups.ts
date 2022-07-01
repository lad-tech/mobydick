import {useContext} from 'react';

import PopupsContext from '../context/context';

const usePopups = () => useContext(PopupsContext);

export default usePopups;
