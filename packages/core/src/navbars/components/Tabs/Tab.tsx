import {useCallback} from 'react';

import {ITabProps} from '../../types';
import useStyles from '../../../styles/theme/hooks/useStyles';
import TouchableOpacity from '../../../basic/components/TouchableOpacity/TouchableOpacity';
import {Typography} from '../../../typography/components/Typography/Typography';
import {LABELS} from '../../../other';

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
    onPressCommon,
  } = props;

  const backgroundColorActive =
    backgroundColorActiveTab || theme.colors.ElementBase;
  const backgroundColor = backgroundColorTab || theme.colors.BgTertiary;
  const font = fontTab || 'Regular-Tertiary-XS';
  const fontActive = fontActiveTab || 'Regular-White-XS';

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
