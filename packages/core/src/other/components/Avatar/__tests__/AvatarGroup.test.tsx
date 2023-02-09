import {render} from '@testing-library/react-native';
import React from 'react';

import AvatarGroup from '../AvatarGroup';
import {ITypeAvatar} from '../types';

const smallGroupDate = [
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
];
const bigGroupDate = [
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
  {
    firstName: 'Иван',
    lastName: 'Пушкин',
  },
];
describe('AvatarGroup', () => {
  test('render AvatarGroup', () => {
    const {toJSON} = render(<AvatarGroup groups={smallGroupDate} />);
    expect(toJSON()).toMatchSnapshot();
  });
  test('render AvatarGroup with props', () => {
    const {toJSON} = render(
      <AvatarGroup
        groups={bigGroupDate}
        backgroundColor={'#ff0000'}
        type={ITypeAvatar.text}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
