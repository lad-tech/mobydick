import React, {FC} from 'react';
import {Pressable, TextInput, View} from '@npm/mobydick-core';
import {rem, SimpleIcon, useStyles} from '@npm/mobydick-styles';

import {ISearchProps} from './types';
import stylesCreate from './stylesCreate';
import {accessibilityLabels, strings} from './constants';

const Search: FC<ISearchProps> = ({
  placeholder = strings.search,
  value,
  onChangeText = value => {
    console.log(
      `Search says: "Add onChangeText (╯°□°)╯︵ ┻━┻". Current value=${value}`,
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
