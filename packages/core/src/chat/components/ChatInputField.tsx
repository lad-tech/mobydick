import {Platform} from 'react-native';

import {createStyles} from '../../styles';
import InputField from '../../inputs/components/InputField/InputField';
import useStyles from '../../styles/hooks/useStyles';
import {LABELS} from '../../other';
import {IInputFieldsProps} from '../../inputs';
import px from '../../styles/utils/px';

const ChatInputField = (props: IInputFieldsProps) => {
  const {textInputContainerStyle, style, containerStyle, ...otherProps} = props;
  const [styles] = useStyles(stylesCreate);

  return (
    <InputField
      accessibilityLabel={LABELS.chatInputField}
      textInputContainerStyle={[styles.inputContainer, textInputContainerStyle]}
      multiline={true}
      style={[styles.textInput, style]}
      containerStyle={[styles.container, containerStyle]}
      {...otherProps}
    />
  );
};

const stylesCreate = createStyles(({spaces}) => ({
  inputContainer: {
    minHeight: px(38),
    maxHeight: px(196),
    width: '100%',
    borderWidth: undefined,
    marginVertical: 0,
    alignItems: 'center',
    paddingVertical: Platform.select({
      android: spaces.Space4,
      ios: spaces.Space8,
    }),
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    minWidth: undefined,
    marginRight: spaces.Space2,
  },
  textInput: {
    paddingTop: 0,
  },
}));

export default ChatInputField;
