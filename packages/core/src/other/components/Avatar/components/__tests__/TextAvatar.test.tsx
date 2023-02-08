import {render} from '@testing-library/react-native';
import React from 'react';

import {ISizeAvatar} from '../../types';
import TextAvatar from '../TextAvatar';

const userWithPhoto = {
  logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
  firstName: 'Иван',
  lastName: 'Пушкин',
};

describe('TextAvatar', () => {
  test('render TextAvatar', () => {
    const {toJSON} = render(
      <TextAvatar
        firstName={userWithPhoto.firstName}
        lastName={userWithPhoto.lastName}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render TextAvatar size S', () => {
    const {toJSON} = render(
      <TextAvatar firstName={userWithPhoto.firstName} size={ISizeAvatar.S} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render TextAvatar size M', () => {
    const {toJSON} = render(
      <TextAvatar firstName={userWithPhoto.firstName} size={ISizeAvatar.M} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render TextAvatar size L', () => {
    const {toJSON} = render(
      <TextAvatar firstName={userWithPhoto.firstName} size={ISizeAvatar.L} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render TextAvatar size XL', () => {
    const {toJSON} = render(
      <TextAvatar firstName={userWithPhoto.firstName} size={ISizeAvatar.XL} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
