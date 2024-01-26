import {render} from '@testing-library/react-native';

import {IAvatarSize} from '../../types';
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
        size={IAvatarSize.S}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render TextAvatar size S', () => {
    const {toJSON} = render(
      <TextAvatar firstName={userWithPhoto.firstName} size={IAvatarSize.S} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render TextAvatar size M', () => {
    const {toJSON} = render(
      <TextAvatar firstName={userWithPhoto.firstName} size={IAvatarSize.M} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render TextAvatar size L', () => {
    const {toJSON} = render(
      <TextAvatar firstName={userWithPhoto.firstName} size={IAvatarSize.L} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  test('render TextAvatar size XL', () => {
    const {toJSON} = render(
      <TextAvatar firstName={userWithPhoto.firstName} size={IAvatarSize.XL} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
