import {render} from '@testing-library/react-native';

import {ISizeSpinner} from '../types';
import Loader from '../Loader';

describe('@lad-tech/mobydick-core/Loader', () => {
  it('renders correctly S', () => {
    const {toJSON} = render(<Loader size={ISizeSpinner.S} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly M', () => {
    const {toJSON} = render(<Loader size={ISizeSpinner.M} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly L', () => {
    const {toJSON} = render(<Loader size={ISizeSpinner.L} />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly without size', () => {
    const {toJSON} = render(<Loader />);
    expect(toJSON()).toMatchSnapshot();
  });
});
