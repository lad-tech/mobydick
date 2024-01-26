import {render} from '@testing-library/react-native';

import DescriptionText from '../DescriptionText';

describe('@lad-tech/mobydick-core/TooltipBase/DescriptionText', () => {
  it('should renders correctly font', () => {
    const {toJSON} = render(
      <DescriptionText
        descriptionText={'descriptionText'}
        descriptionFont={'Regular-Primary-XS'}
        descriptionStyles={{width: 200}}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly', () => {
    const {toJSON} = render(
      <DescriptionText descriptionText={'descriptionText'} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
