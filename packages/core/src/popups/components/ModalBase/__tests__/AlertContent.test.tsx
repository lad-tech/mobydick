import {render} from '@testing-library/react-native';

import AlertContent from '../AlertContent';

describe('@lad-tech/mobydick-core/modalBase', () => {
  it('should renders correctly AlertContent type = check', () => {
    const {toJSON} = render(<AlertContent />);

    expect(toJSON()).toMatchSnapshot();
  });
  it('should renders correctly AlertContent type = warning', () => {
    const {toJSON} = render(
      <AlertContent
        name={'icon-warning'}
        color={'#fff'}
        style={{backgroundColor: '#fff'}}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
