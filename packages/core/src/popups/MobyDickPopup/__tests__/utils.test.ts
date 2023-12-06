import isPopupWithProps from '../utils';
describe('@lad-tech/mobydick-core/MobyDickPopup/utils', () => {
  test('isPopupWithProps: true', () => {
    expect(
      isPopupWithProps({
        id: '1',
        Content: () => null,
        props: {title: 'SomeTitle'},
      }),
    ).toBe(true);
  });

  test('isPopupWithProps: false', () => {
    expect(
      isPopupWithProps({
        id: '1',
        Content: () => null,
      }),
    ).toBe(false);
  });
});
