"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Avatar_1 = __importDefault(require("../../other/components/Avatar/Avatar"));
const TouchableOpacity_1 = __importDefault(require("../../basic/components/TouchableOpacity/TouchableOpacity"));
const other_1 = require("../../other");
const View_1 = __importDefault(require("../../basic/components/View/View"));
const useStyles_1 = __importDefault(require("../../styles/hooks/useStyles"));
const styles_1 = require("../../styles");
const ChatMessage_1 = __importDefault(require("./ChatMessage"));
const ChatMessageAvatar = (props) => {
    const { onPress, isMe, message, image, time, ...otherProps } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate, isMe);
    return (<View_1.default style={styles.container}>
      <TouchableOpacity_1.default onPress={onPress} style={styles.avatar} disabled={onPress === undefined}>
        <Avatar_1.default size={other_1.IAvatarSize.S} {...otherProps}/>
      </TouchableOpacity_1.default>
      <ChatMessage_1.default isMe={isMe} message={message} time={time} image={image}/>
    </View_1.default>);
};
const stylesCreate = (0, styles_1.createStyles)(({ spaces }, isMe) => ({
    container: {
        flexDirection: 'row',
        alignSelf: isMe ? 'flex-end' : 'flex-start',
    },
    avatar: {
        paddingRight: spaces.Space8,
        marginVertical: spaces.Space4,
        alignSelf: 'flex-end',
    },
}));
exports.default = ChatMessageAvatar;
