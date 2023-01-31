import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Avatar from '../Avatar';
import {ISizeAvatar} from '../types';

const userWithPhoto = {
  logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
  name: 'Иван Пушкин',
};

const userWithoutPhoto = {
  logo: 'https://vraki.net/',
  name: 'Иван Пушкин',
};

describe('Avatar', () => {
  test('render avatar with photo without size', () => {
    const {toJSON} = render(<Avatar user={userWithPhoto} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('render avatar with photo S', () => {
    const {toJSON} = render(
      <Avatar user={userWithPhoto} size={ISizeAvatar.S} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('render avatar with photo L', () => {
    const {toJSON} = render(
      <Avatar user={userWithPhoto} size={ISizeAvatar.L} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('render avatar with photo XL', () => {
    const {toJSON} = render(
      <Avatar user={userWithPhoto} size={ISizeAvatar.XL} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('render avatar not photo', () => {
    const {toJSON, getByLabelText} = render(<Avatar user={userWithoutPhoto} />);

    fireEvent(getByLabelText('imageAvatar'), 'onError', {nativeEvent: {}});

    expect(toJSON()).toMatchSnapshot();
  });

  test('render without avatar', () => {
    const userEmpty = null;
    const {toJSON} = render(<Avatar user={userEmpty} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
