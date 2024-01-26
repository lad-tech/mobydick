import {render} from '@testing-library/react-native';

import ModalError from '../ModalError';

describe('@lad-tech/mobydick-core/modalError', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(
      <ModalError
        title={'title'}
        descriptionText={'descriptionText'}
        id={'id'}
        onClose={() => null}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly with optional', () => {
    const {toJSON} = render(
      <ModalError
        title={'title'}
        descriptionText={'descriptionText'}
        buttonText={'buttonText'}
        id={'id'}
        onClose={() => null}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
