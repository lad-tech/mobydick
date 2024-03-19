import {render} from '@testing-library/react-native';

import AvatarGroup from '../AvatarGroup';
import {IAvatarTypes} from '../types';
import {
  defaultGroupDateTest,
  defaultUserTest,
  smallGroupDateTest,
} from '../../../../../../../src/shared/lib/test/data/avatar';

describe('AvatarGroup', () => {
  test('render AvatarGroup < 3', () => {
    const {toJSON} = render(
      <AvatarGroup
        groups={defaultGroupDateTest}
        backgroundColor={'#ff0000'}
        type={IAvatarTypes.text}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render AvatarGroup', () => {
    const {toJSON} = render(
      <AvatarGroup
        groups={smallGroupDateTest.concat(Array(8).fill(defaultUserTest))}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render AvatarGroup = 4', () => {
    const {toJSON} = render(
      <AvatarGroup
        groups={defaultGroupDateTest.concat(defaultGroupDateTest)}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render AvatarGroup with props', () => {
    const {toJSON} = render(
      <AvatarGroup
        groups={smallGroupDateTest.concat(Array(101).fill(defaultUserTest))}
        backgroundColor={'#ff0000'}
        type={IAvatarTypes.text}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render AvatarGroup groupCount', () => {
    const {toJSON} = render(
      <AvatarGroup
        groups={smallGroupDateTest.concat(Array(101).fill(defaultUserTest))}
        backgroundColor={'#ff0000'}
        type={IAvatarTypes.text}
        groupCount={50}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
