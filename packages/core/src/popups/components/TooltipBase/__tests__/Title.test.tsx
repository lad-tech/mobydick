import {render} from '@testing-library/react-native';

import TooltipTitle from '../TooltipTitle';

describe('@lad-tech/mobydick-core/TooltipBase/Title', () => {
  it('should renders correctly font', () => {
    const {toJSON} = render(
      <TooltipTitle
        title={'title'}
        titleFont={'Regular-Primary-XS'}
        titleStyles={{width: 100}}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly', () => {
    const {toJSON} = render(<TooltipTitle title={'title'} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
