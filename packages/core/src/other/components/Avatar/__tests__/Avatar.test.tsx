import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Avatar from '../Avatar';
import {ISizeAvatar, ITypeAvatar} from '../types';

const userWithPhoto = {
  logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
  firstName: 'Иван',
  lastName: 'Пушкин',
};
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ImageAvatar = require('../../../../../../../storybook/stories/other/Example/images/ImageAvatar.png');

const userImage = {
  logo: ImageAvatar,
  firstName: 'Иван',
  lastName: 'Пушкин',
};
const userWithoutPhoto = {
  logo: 'https://vraki.net/',
  firstName: 'Иван',
  lastName: 'Пушкин',
};

describe('Avatar', () => {
  test('render avatar with photo without size', () => {
    const {toJSON} = render(<Avatar user={userWithPhoto} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('render avatar with photo S', () => {
    const {toJSON} = render(
      <Avatar
        user={userWithPhoto}
        size={ISizeAvatar.S}
        type={ITypeAvatar.icon}
      />,
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
    const {toJSON} = render(<Avatar user={userImage} size={ISizeAvatar.XL} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('render avatar not photo', () => {
    const {toJSON} = render(
      <Avatar user={userWithoutPhoto} type={ITypeAvatar.icon} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  test('render avatar ITypeAvatar.icon', () => {
    const {toJSON} = render(
      <Avatar user={userWithoutPhoto} type={ITypeAvatar.icon} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render avatar ITypeAvatar.text', () => {
    const {toJSON, getByLabelText} = render(
      <Avatar user={userWithoutPhoto} type={ITypeAvatar.text} />,
    );

    fireEvent(getByLabelText('imageAvatar'), 'onError', {nativeEvent: {}});

    expect(toJSON()).toMatchSnapshot();
  });
  test('render without avatar', () => {
    const userEmpty = null;
    const {toJSON} = render(<Avatar user={userEmpty} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
