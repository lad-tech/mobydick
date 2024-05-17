"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const constants_1 = require("../../constants");
const useTheme_1 = __importDefault(require("../../../styles/hooks/useTheme"));
const isNumber_1 = require("../../functions/isNumber");
const types_1 = require("./types");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const AvatarWithoutImage_1 = __importDefault(require("./components/AvatarWithoutImage"));
const AvatarBadge_1 = __importDefault(require("./components/AvatarBadge"));
const Avatar = props => {
    const { user, backgroundColor, size = types_1.IAvatarSize.M, type = types_1.IAvatarTypes.text, style, badge, disabled = false, border = false, headers, } = props;
    const { colors } = (0, useTheme_1.default)();
    const userColor = (0, react_1.useMemo)(() => {
        const nameLength = `${user?.firstName}${user?.middleName}${user?.lastName}`
            .length;
        const avatarColors = [
            colors.BannerFirst,
            colors.BannerSecond,
            colors.BannerThird,
            colors.BannerFourth,
            colors.BannerFifth,
            colors.BannerSixth,
            colors.BannerSeventh,
        ];
        return avatarColors[nameLength % avatarColors.length];
    }, [
        user,
        colors.BannerFirst,
        colors.BannerSecond,
        colors.BannerThird,
        colors.BannerFourth,
        colors.BannerFifth,
        colors.BannerSixth,
        colors.BannerSeventh,
    ]);
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default, size, border);
    const [error, setError] = (0, react_1.useState)();
    const onError = (0, react_1.useCallback)((e) => {
        setError(e.nativeEvent);
    }, []);
    if (!user) {
        return null;
    }
    const isAvatarBadge = !!badge && !disabled && size === types_1.IAvatarSize.M;
    return (<View_1.default style={[
            styles.container,
            { backgroundColor: backgroundColor || userColor },
            style,
            { opacity: disabled ? 0.5 : 1 },
        ]}>
      {isAvatarBadge && <AvatarBadge_1.default badge={badge}/>}
      {error || !user.logo ? (<AvatarWithoutImage_1.default size={size} firstName={user.firstName} lastName={user.lastName} type={type}/>) : (<react_native_1.Image source={(0, isNumber_1.isNumber)(user?.logo) ? user.logo : { uri: user?.logo, headers }} style={styles.image} onError={onError} accessibilityLabel={constants_1.LABELS.imageAvatar}/>)}
    </View_1.default>);
};
exports.default = Avatar;
