import {render} from '@testing-library/react-native';

import {Typography} from '../Typography';

describe('@lad-tech/mobydick-core/Typography', () => {
  it('renders default correctly', () => {
    const {toJSON} = render(<Typography>My Text</Typography>);
    expect(toJSON()).toMatchSnapshot();
  });
});
