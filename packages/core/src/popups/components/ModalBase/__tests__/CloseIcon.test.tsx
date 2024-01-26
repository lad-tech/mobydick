import {render} from '@testing-library/react-native';

import CloseIcon from '../CloseIcon';

describe('@lad-tech/mobydick-core/CloseIcon', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(<CloseIcon onPress={() => null} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
