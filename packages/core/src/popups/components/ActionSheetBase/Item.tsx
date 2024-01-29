import {FC, useCallback} from 'react';

import useStyles from '../../../styles/hooks/useStyles';
import useTheme from '../../../styles/hooks/useTheme';
import Pressable from '../../../basic/components/Pressable/Pressable';
import {LABELS} from '../../../other';

import stylesCreate from './stylesCreate';
import Contents from './content/Contents';
import {IPropsItem} from './types';

const Item: FC<IPropsItem> = props => {
  const {onPress, style, disabled, itemType, isStatusPressedForTest} = props;
  const [styles] = useStyles(stylesCreate, itemType);
  const {colors} = useTheme();

  const getStyle = useCallback(
    ({pressed}: {pressed: boolean}) => [
      styles.item,
      {backgroundColor: pressed ? colors.BgSecondary : colors.BgPrimary},
      style,
    ],
    [],
  );

  return (
    <Pressable
      style={getStyle}
      disabled={disabled}
      onPress={onPress}
      accessibilityLabel={LABELS.actionSheetsItem}
      testOnly_pressed={isStatusPressedForTest}>
      <Contents {...props} />
    </Pressable>
  );
};

export default Item;
