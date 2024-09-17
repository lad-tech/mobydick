import {forwardRef, useCallback} from 'react';

import useStyles from '../../../styles/hooks/useStyles';
import View from '../../../basic/components/View/View';
import SimpleIcon from '../../../styles/icons/font/SimpleIcon';
import TextInput from '../../../basic/components/TextInput/TextInput';
import {ITextInput} from '../../../basic';
import Pressable from '../../../basic/components/Pressable/Pressable';
import {LABELS} from '../../../other';
import px from '../../../styles/utils/px';

import {strings} from './constants';
import stylesCreate from './stylesCreate';
import {ISearchProps} from './types';

const Search = forwardRef<ITextInput, ISearchProps>((props, ref) => {
  const {
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
  } = props;
  const [styles, theme] = useStyles(stylesCreate);

  const onCancel = useCallback(() => {
    onChangeText('');
  }, [onChangeText]);

  return (
    <View style={[styles.container, containerStyle]} accessible={true}>
      {leftIcon ? leftIcon : <SimpleIcon name={'icon-search'} />}
      <TextInput
        ref={ref}
        accessibilityLabel={LABELS.search}
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
          accessibilityLabel={LABELS.cancelSearch}
          onPress={onCancel}
          style={styles.cancelIcon}>
          <SimpleIcon name={'icon-cancel'} size={px(16)} />
        </Pressable>
      ) : null}
    </View>
  );
});

export default Search;
