import React, {FC} from 'react';

import useStyles from '../../../styles/theme/hooks/useStyles';
import View from '../../../basic/components/View/View';
import SimpleIcon from '../../../styles/icons/font/SimpleIcon';
import TextInput from '../../../basic/components/TextInput/TextInput';
import Pressable from '../../../basic/components/Pressable/Pressable';
import rem from '../../../styles/spaces/rem';

import {accessibilityLabels, strings} from './constants';
import stylesCreate from './stylesCreate';
import {ISearchProps} from './types';

const Search: FC<ISearchProps> = ({
  placeholder = strings.search,
  value,
  onChangeText = text => {
    console.log(
      `Search says: "Add onChangeText (╯°□°)╯︵ ┻━┻". Current value=${text}`,
    );
  },
  containerStyle,
  leftIcon,
  textInputContainerStyle,
  ...otherProps
}) => {
  const [styles, theme] = useStyles(stylesCreate);

  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon ? leftIcon : <SimpleIcon name={'icon-search'} />}
      <TextInput
        accessibilityLabel={accessibilityLabels.search}
        style={[styles.textInput, textInputContainerStyle]}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.TextTertiary}
        value={value}
        onChangeText={onChangeText}
        selectionColor={theme.colors.IconBase}
        {...otherProps}
      />
      {value ? (
        <Pressable
          accessibilityLabel={accessibilityLabels.cancel}
          onPress={() => onChangeText('')}
          style={styles.cancelIcon}>
          <SimpleIcon name={'icon-cancel'} size={rem(16)} />
        </Pressable>
      ) : null}
    </View>
  );
};

export default Search;
