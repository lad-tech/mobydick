import {useCallback} from 'react';

import {ITabProps} from '../../types';
import useStyles from '../../../styles/hooks/useStyles';
import TouchableOpacity from '../../../basic/components/TouchableOpacity/TouchableOpacity';
import {LABELS} from '../../../other';
import {Typography} from '../../../typography/components/Typography';

import stylesCreate from './stylesCreate';

const Tab = (props: ITabProps): JSX.Element => {
  const [styles, theme] = useStyles(stylesCreate);
  const {
    active,
    item,
    fontTab,
    fontActiveTab,
    backgroundColorTab,
    backgroundColorActiveTab,
    styleTab,
    styleActiveTab,
    onPressCommon,
  } = props;

  const backgroundColorActive =
    backgroundColorActiveTab || theme.colors.ElementAccent;
  const backgroundColor = backgroundColorTab || theme.colors.BgTertiary;
  const font = fontTab || 'Regular-Tertiary-S';
  const fontActive = fontActiveTab || 'Regular-White-S';

  const selectPressable = useCallback(() => {
    if (item.onPress) {
      item.onPress();
    } else if (onPressCommon) {
      onPressCommon(item);
    }
  }, [item.onPress, onPressCommon]);

  return (
    <TouchableOpacity
      onPress={selectPressable}
      accessibilityLabel={LABELS.tab}
      style={[
        styles.tab,
        active ? styleActiveTab : styleTab,
        {
          backgroundColor: active ? backgroundColorActive : backgroundColor,
        },
      ]}>
      {item.leftIcon ? item.leftIcon : null}
      <Typography font={active ? fontActive : font}>{item.label}</Typography>
      {item.rightIcon ? item.rightIcon : null}
    </TouchableOpacity>
  );
};

export default Tab;
