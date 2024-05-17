"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const Badge_1 = require("../../Badge");
const Counter_1 = __importDefault(require("../../Badge/Counter/Counter"));
const SimpleIcon_1 = __importDefault(require("../../../../styles/icons/font/SimpleIcon"));
const useStyles_1 = __importDefault(require("../../../../styles/hooks/useStyles"));
const useTheme_1 = __importDefault(require("../../../../styles/hooks/useTheme"));
const styles_1 = require("../../../../styles");
const px_1 = __importDefault(require("../../../../styles/utils/px"));
const AvatarBadge = (props) => {
    const { badge } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate);
    const { colors } = (0, useTheme_1.default)();
    if (badge?.type === types_1.IBadgeTypes.indicator) {
        return <Badge_1.BadgeIndicator type={badge.value} style={styles.indicator}/>;
    }
    if (badge?.type === types_1.IBadgeTypes.counter) {
        return (<Counter_1.default type={badge.value} style={styles.counter} size={Badge_1.ICounterSize.small} count={badge.count}/>);
    }
    if (badge?.type === types_1.IBadgeTypes.status) {
        return (<SimpleIcon_1.default name={badge.value} size={(0, px_1.default)(12)} color={colors.IconAdditional} style={styles.status}/>);
    }
    return null;
};
const stylesCreate = (0, styles_1.createStyles)(_ => ({
    indicator: {
        bottom: 2,
        right: 2,
    },
    counter: {
        position: 'absolute',
        bottom: -3,
        right: -3,
    },
    status: {
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        right: 0,
    },
}));
exports.default = AvatarBadge;
