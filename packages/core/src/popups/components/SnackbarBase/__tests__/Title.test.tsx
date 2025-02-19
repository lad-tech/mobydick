import {render} from '@testing-library/react-native';

import SnackbarTitle from '../SnackbarTitle';

describe('@lad-tech/mobydick-core/SnackbarBase/Title', () => {
  it('should renders correctly without titleFont', () => {
    const {toJSON} = render(
      <SnackbarTitle title={'title'} titleStyles={{flex: 1}} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly with titleFont', () => {
    const {toJSON} = render(
      <SnackbarTitle
        title={'title two'}
        titleStyles={{backgroundColor: '#000'}}
        titleFont={'Medium-Secondary-M'}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
