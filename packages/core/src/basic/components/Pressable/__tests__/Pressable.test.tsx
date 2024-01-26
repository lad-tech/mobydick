import {render} from '@testing-library/react-native';

import Pressable from '../Pressable';

describe('@lad-tech/mobydick-core/Pressable', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<Pressable />);
    expect(toJSON()).toMatchSnapshot();
  });
});
