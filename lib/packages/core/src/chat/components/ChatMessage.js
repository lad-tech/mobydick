"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const View_1 = __importDefault(require("../../basic/components/View/View"));
const typography_1 = require("../../typography");
const isNumber_1 = require("../../other/functions/isNumber");
const useStyles_1 = __importDefault(require("../../styles/hooks/useStyles"));
const isValidMessageTime_1 = require("../functions/isValidMessageTime");
const styles_1 = require("../../styles");
const px_1 = __importDefault(require("../../styles/utils/px"));
const ChatMessage = (props) => {
    const { isMe, message, image, time } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate, isMe);
    return (<View_1.default style={styles.container}>
      <View_1.default style={styles.bubble}>
        {image && (<View_1.default style={[styles.image, styles.imageView]}>
            <react_native_1.Image source={(0, isNumber_1.isNumber)(image) ? image : { uri: image }} style={styles.image}/>
          </View_1.default>)}

        {message && (<View_1.default style={styles.textArea}>
            <typography_1.Typography font={isMe ? 'Regular-White-XS' : 'Regular-Secondary-XS'}>
              {message}
            </typography_1.Typography>
          </View_1.default>)}

        <View_1.default style={styles.timeArea}>
          {(0, isValidMessageTime_1.isValidMessageTime)(time) && (<typography_1.Typography font={isMe ? 'Regular-WhiteExtra-XXXS' : 'Regular-Muted-XXXS'}>
              {time}
            </typography_1.Typography>)}
        </View_1.default>
      </View_1.default>
    </View_1.default>);
};
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }, isMe) => ({
    container: {
        flexDirection: 'row',
        alignSelf: isMe ? 'flex-end' : 'flex-start',
        maxWidth: '90%',
    },
    bubble: {
        backgroundColor: isMe ? colors.ElementBase : colors.BgPrimary,
        borderRadius: spaces.Space10,
        borderBottomLeftRadius: isMe ? spaces.Space10 : 0,
        borderBottomRightRadius: isMe ? 0 : spaces.Space10,
        marginVertical: spaces.Space4,
    },
    imageView: {
        margin: spaces.Space4,
    },
    image: {
        minWidth: (0, px_1.default)(129),
        maxWidth: (0, px_1.default)(148),
        minHeight: (0, px_1.default)(129),
        maxHeight: (0, px_1.default)(148),
    },
    textArea: {
        paddingTop: spaces.Space8,
        paddingBottom: spaces.Space4,
        paddingHorizontal: spaces.Space10,
    },
    timeArea: {
        paddingHorizontal: spaces.Space6,
        paddingBottom: spaces.Space8,
        alignSelf: 'flex-end',
    },
}));
exports.default = ChatMessage;
