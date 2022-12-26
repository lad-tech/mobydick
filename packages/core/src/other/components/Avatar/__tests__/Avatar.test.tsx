import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Avatar} from '../Avatar';

describe('Avatar', () => {
  test('render avatar with photo', () => {
    const senderPhoto = {
      logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
      name: 'Иван Пушкин',
    };

    const {toJSON} = render(<Avatar sender={senderPhoto} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('render avatar not photo', () => {
    const senderNotPhoto = {
      logo: 'https://vraki.net/',
      name: 'Иван Пушкин',
    };
    const {toJSON, getByLabelText} = render(<Avatar sender={senderNotPhoto} />);

    fireEvent(getByLabelText('imageAvatar'), 'onError', {nativeEvent: {}});

    expect(toJSON()).toMatchSnapshot();
  });
  test('render without avatar', () => {
    const senderEmpty = null;
    const {toJSON} = render(<Avatar sender={senderEmpty} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
