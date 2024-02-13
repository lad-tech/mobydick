import getSelectedItems from '../getSelectedItems';

describe('@lad-tech/mobydick-core/getSelectedItems', () => {
  const inputElement = {value: 1, label: 'JavaScript'};

  it('selectedItem is undefined', () => {
    expect(getSelectedItems(undefined, inputElement)).toStrictEqual([
      inputElement,
    ]);
  });

  it('selectedItem is empty', () => {
    expect(getSelectedItems([], inputElement)).toStrictEqual([inputElement]);
  });

  it('selectedItem is not contains inputElement', () => {
    const selectedItem = [
      {value: 2, label: 'PHP'},
      {value: 3, label: 'Rust'},
    ];
    expect(getSelectedItems(selectedItem, inputElement)).toStrictEqual([
      ...selectedItem,
      inputElement,
    ]);
  });

  it('selectedItem already contains inputElement', () => {
    const selectedItem = [
      {value: 2, label: 'PHP'},
      {value: 3, label: 'Rust'},
    ];
    expect(
      getSelectedItems([...selectedItem, inputElement], inputElement),
    ).toStrictEqual(selectedItem);
  });
});
