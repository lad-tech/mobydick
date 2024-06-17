import {FC} from 'react';

import useStyles from '../../../../styles/hooks/useStyles';
import {View} from '../../../../basic';
import {TypographyLegacy} from '../../../../typography';
import {TouchableOpacity} from '../../../../basic/components/TouchableOpacity';
import SimpleIcon from '../../../../styles/icons/font/SimpleIcon';
import createStyles from '../../../../styles/utils/createStyles';

interface IChipProps {
  text: string;
  onPress?: () => void;
  maxTextLength?: number;
}

const Chip: FC<IChipProps> = ({
  text,
  onPress,
  maxTextLength = DEFAULT_MAX_TEXT_LENGTH,
}) => {
  const [styles, theme] = useStyles(styleSource);

  return (
    <View style={styles.container}>
      <TypographyLegacy font="Regular-Accent-XXS" style={styles.text}>
        {getText(text, maxTextLength)}
      </TypographyLegacy>
      <TouchableOpacity accessibilityLabel={text} onPress={onPress}>
        <SimpleIcon
          size={theme.spaces.Space16}
          color={theme.colors.TextAccent}
          name="icon-cancel"
        />
      </TouchableOpacity>
    </View>
  );
};

const DEFAULT_MAX_TEXT_LENGTH = 15;

const getText = (text: string, maxTextLength: number) => {
  if (text.length <= maxTextLength) {
    return text;
  }
  return `${text.slice(0, maxTextLength)}...`;
};

const styleSource = createStyles(({colors, spaces}) => ({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    borderRadius: spaces.Space8,
    padding: spaces.Space4,
    paddingLeft: spaces.Space8,
    backgroundColor: colors.BgAccentSoft,
  },
  text: {
    marginRight: spaces.Space4,
  },
}));

export default Chip;
