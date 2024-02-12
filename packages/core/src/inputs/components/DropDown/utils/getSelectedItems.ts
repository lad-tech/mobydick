import {IListItem} from '../types';

function getSelectedItems<T extends IListItem>(
  selectedItems: T[] | undefined,
  item: T,
) {
  if (selectedItems === undefined || selectedItems.length === 0) {
    return [item];
  }

  const element = selectedItems.find(({value}) => value === item.value);

  if (element) {
    return selectedItems.filter(({value}) => element.value !== value);
  }

  return [...selectedItems, item];
}

export default getSelectedItems;
