import React from 'react';
import {render} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';

import Circle from '../Circle';
import stylesCreate from '../stylesCreate';
import useStyles from '../../../styles/theme/hooks/useStyles';

describe('@lad-tech/mobydick-core/Radio/Circle', () => {
  it('renders correctly', () => {
    const {result} = renderHook(() => useStyles(stylesCreate, false, false));
    const [styles] = result.current;
    const {toJSON} = render(
      <Circle innerStyle={styles.circle} outerStyle={styles.innerCircle} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly selected', () => {
    const {result} = renderHook(() => useStyles(stylesCreate, false, false));
    const [styles] = result.current;
    const {toJSON} = render(
      <Circle
        innerStyle={styles.circle}
        outerStyle={styles.innerCircle}
        selected
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
