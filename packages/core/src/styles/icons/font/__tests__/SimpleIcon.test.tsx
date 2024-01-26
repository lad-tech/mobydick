import {render} from '@testing-library/react-native';

import SimpleIcon from '../SimpleIcon';

describe('@lad-tech/mobydick-core/icons/SimpleIcon', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<SimpleIcon name={'icon-account'} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
