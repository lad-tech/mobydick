import {render} from '@testing-library/react-native';

import View from '../View';

describe('@lad-tech/mobydick-core/View', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<View />);
    expect(toJSON()).toMatchSnapshot();
  });
});
