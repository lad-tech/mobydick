import {render} from '@testing-library/react-native';

import Text from '../Text';

describe('@lad-tech/mobydick-core/Text', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<Text>Text</Text>);
    expect(toJSON()).toMatchSnapshot();
  });
});
