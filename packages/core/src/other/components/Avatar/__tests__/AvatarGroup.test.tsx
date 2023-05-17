import {render} from '@testing-library/react-native';
import React from 'react';

import AvatarGroup from '../AvatarGroup';
import {IAvatarTypes} from '../types';

const defaultGroupDate = [
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
];
const smallGroupDate = [
  {
    logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  ...defaultGroupDate,
];

const defaultUser = [
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
];
describe('AvatarGroup', () => {
  test('render AvatarGroup < 3', () => {
    const {toJSON} = render(
      <AvatarGroup
        groups={defaultGroupDate}
        backgroundColor={'#ff0000'}
        type={IAvatarTypes.text}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render AvatarGroup', () => {
    const {toJSON} = render(
      <AvatarGroup
        groups={smallGroupDate.concat(Array(8).fill(defaultUser))}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render AvatarGroup = 4', () => {
    const {toJSON} = render(
      <AvatarGroup groups={defaultGroupDate.concat(defaultGroupDate)} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render AvatarGroup with props', () => {
    const {toJSON} = render(
      <AvatarGroup
        groups={smallGroupDate.concat(Array(101).fill(defaultUser))}
        backgroundColor={'#ff0000'}
        type={IAvatarTypes.text}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render AvatarGroup groupCount', () => {
    const {toJSON} = render(
      <AvatarGroup
        groups={smallGroupDate.concat(Array(101).fill(defaultUser))}
        backgroundColor={'#ff0000'}
        type={IAvatarTypes.text}
        groupCount={50}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
