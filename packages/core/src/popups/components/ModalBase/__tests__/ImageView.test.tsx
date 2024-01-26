import {render} from '@testing-library/react-native';

import View from '../../../../basic/components/View/View';
import ImageView from '../ImageView';

describe('@lad-tech/mobydick-core/ImageView', () => {
  it('should renders correctly', () => {
    const {toJSON} = render(<ImageView image={<View />} />);

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly with styles', () => {
    const {toJSON} = render(
      <ImageView image={<View />} imageStyles={{flex: 1}} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
