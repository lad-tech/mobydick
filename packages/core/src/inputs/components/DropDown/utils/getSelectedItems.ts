import {IListItem} from '../types';

function getSelectedItems<T extends IListItem>(
  selectedItems: T[] | undefined,
  item: T,
) {
  if (!selectedItems?.length) {
    return [item];
  }

  const itemAlreadyExist = selectedItems.some(
    ({value}) => value === item.value,
  );

  if (itemAlreadyExist) {
    return selectedItems.filter(({value}) => item.value !== value);
  }

  return [...selectedItems, item];
}

export default getSelectedItems;
