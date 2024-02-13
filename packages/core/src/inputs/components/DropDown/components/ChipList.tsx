import {IDropDownMultiSelectProps, IListItem} from '../types';
import createStyles from '../../../../styles/utils/createStyles';
import useStyles from '../../../../styles/hooks/useStyles';
import {View} from '../../../../basic';

import Chip from './Chip';

type ChipListProps<T extends IListItem> = {
  selectedItem: IDropDownMultiSelectProps<T>['selectedItem'];
  onChange: (value: T) => void;
};

function ChipList<T extends IListItem>({
  selectedItem,
  onChange,
}: ChipListProps<T>) {
  const [styles] = useStyles(styleSource);

  const handleDelete =
    (item: IDropDownMultiSelectProps<T>['list'][0]) => () => {
      onChange?.(item);
    };

  return (
    <View style={styles.contentContainerStyle}>
      {selectedItem?.map(item => (
        <Chip key={item.value} text={item.label} onPress={handleDelete(item)} />
      ))}
    </View>
  );
}

const styleSource = createStyles(({spaces}) => ({
  contentContainerStyle: {
    gap: spaces.Space8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
}));

export default ChipList;
