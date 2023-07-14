import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Avatar from '../Avatar';
import {
  IAvatarSize,
  IAvatarTypes,
  IBadge,
  IBadgeTypes,
  IStatusTypes,
} from '../types';
import {ICounterTypes, IIndicatorTypes} from '../../Badge';
import {LABELS} from '../../../constants';

const userWithPhoto = {
  logo: 'https://vraki.net/sites/default/files/inline/images/30_55.jpg',
  firstName: 'Иван',
  lastName: 'Пушкин',
};

const userWithPhotoError = {
  logo: 'https://vraki.net/',
  firstName: 'Иван',
  lastName: 'Пушкин',
};

const userWithoutPhoto = {
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
        size={IAvatarSize.S}
        type={IAvatarTypes.icon}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('render avatar with photo L', () => {
    const {toJSON} = render(
      <Avatar user={userWithPhoto} size={IAvatarSize.L} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('render avatar with photo XL', () => {
    const {toJSON} = render(
      <Avatar
        user={userWithPhoto}
        size={IAvatarSize.XL}
        headers={{test: `test token`}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('render avatar not photo', () => {
    const {toJSON} = render(
      <Avatar user={userWithPhotoError} type={IAvatarTypes.icon} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  test('render avatar ITypeAvatar.icon', () => {
    const {toJSON} = render(
      <Avatar user={userWithoutPhoto} type={IAvatarTypes.icon} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render avatar ITypeAvatar.text', () => {
    const {toJSON, getByLabelText} = render(
      <Avatar user={userWithPhotoError} type={IAvatarTypes.text} />,
    );

    fireEvent(getByLabelText(LABELS.imageAvatar), 'onError', {nativeEvent: {}});

    expect(toJSON()).toMatchSnapshot();
  });
  test('render without avatar border', () => {
    const userEmpty = null;
    const {toJSON} = render(<Avatar user={userEmpty} border />);

    expect(toJSON()).toMatchSnapshot();
  });
  test('render avatar badge indicator', () => {
    const {toJSON} = render(
      <Avatar
        user={userWithoutPhoto}
        badge={{type: IBadgeTypes.indicator, value: IIndicatorTypes.primary}}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  test('render avatar badge counter', () => {
    const {toJSON} = render(
      <Avatar
        user={userWithoutPhoto}
        badge={{
          type: IBadgeTypes.counter,
          value: ICounterTypes.attentionLight,
          count: 6,
        }}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  test('render avatar badge status', () => {
    const {toJSON} = render(
      <Avatar
        user={userWithoutPhoto}
        badge={{type: IBadgeTypes.status, value: IStatusTypes.star}}
        disabled={false}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  test('render avatar badge null', () => {
    const {toJSON} = render(
      <Avatar
        user={userWithoutPhoto}
        badge={
          {
            type: 'IBadgeTypes.status',
            value: IStatusTypes.star,
          } as unknown as IBadge
        }
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  test('render avatar disabled', () => {
    const {toJSON} = render(<Avatar user={userWithoutPhoto} disabled={true} />);

    expect(toJSON()).toMatchSnapshot();
  });

  test('render avatar without firstName', () => {
    const {toJSON} = render(
      <Avatar
        user={{
          firstName: '',
          lastName: 'Пушкин',
        }}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
  test('render avatar without firstName and lastName', () => {
    const {toJSON} = render(
      <Avatar
        user={{
          firstName: '',
          lastName: '',
        }}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
