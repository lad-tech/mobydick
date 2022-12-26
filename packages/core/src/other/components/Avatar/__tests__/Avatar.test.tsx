import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Avatar} from '../Avatar';

describe('Avatar', () => {
  test('render avatar with photo', () => {
    const userWithPhoto = {
      logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
      name: 'Иван Пушкин',
    };

    const {toJSON} = render(<Avatar user={userWithPhoto} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('render avatar not photo', () => {
    const userWithoutPhoto = {
      logo: 'https://vraki.net/',
      name: 'Иван Пушкин',
    };
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
