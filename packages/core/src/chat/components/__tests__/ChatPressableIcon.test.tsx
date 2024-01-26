import {render} from '@testing-library/react-native';

import ChatPressableIcon from '../ChatPressableIcon';

describe('@lad-tech/mobydick-core/ChatPressableIcon', () => {
  it('renders correctly', () => {
    const {toJSON} = render(
      <ChatPressableIcon name={'icon-location'} onPress={() => null} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly with props', () => {
    const {toJSON} = render(
      <ChatPressableIcon
        name={'icon-location'}
        onPress={() => null}
        color={'red'}
        backgroundColor={'black'}
        disabled={false}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  it('renders correctly disabled', () => {
    const {toJSON} = render(
      <ChatPressableIcon
        name={'icon-location'}
        onPress={() => null}
        color={'red'}
        backgroundColor={'black'}
        disabled={true}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
