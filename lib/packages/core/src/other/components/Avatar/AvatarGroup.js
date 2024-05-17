"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = __importDefault(require("../../../basic/components/View/View"));
const typography_1 = require("../../../typography");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const styles_1 = require("../../../styles");
const px_1 = __importDefault(require("../../../styles/utils/px"));
const Avatar_1 = __importDefault(require("./Avatar"));
const AvatarGroup = props => {
    const { groups, groupCount = groups.length, ...otherProps } = props;
    const count = groupCount - 3;
    const [styles] = (0, useStyles_1.default)(stylesCreate, groupCount);
    const maxCount = 99;
    const text = count > maxCount ? maxCount : count;
    return (<View_1.default style={styles.container}>
      {groups[0] && (<Avatar_1.default user={groups[0]} style={styles.avatarOne} border {...otherProps}/>)}
      {groups[1] && (<Avatar_1.default user={groups[1]} style={styles.avatarTwo} border {...otherProps}/>)}
      {groups[2] && (<Avatar_1.default user={groups[2]} style={styles.avatarThree} border {...otherProps}/>)}

      {groupCount < 5 ? (groups[3] && (<Avatar_1.default user={groups[3]} style={styles.avatarFour} border {...otherProps}/>)) : (<View_1.default style={styles.countView}>
          <typography_1.Typography font={'Medium-Secondary-XXS'} style={styles.countText}>
            {'+' + text.toString()}
          </typography_1.Typography>
        </View_1.default>)}
    </View_1.default>);
};
exports.default = AvatarGroup;
const stylesCreate = (0, styles_1.createStyles)(({ spaces, colors }, length) => ({
    container: {
        flexDirection: 'row',
        maxWidth: length > 3
            ? spaces.Space40 * 4 - (0, px_1.default)(36)
            : spaces.Space40 * length - spaces.Space12 * (length - 1),
    },
    countView: {
        width: spaces.Space40,
        height: spaces.Space40,
        borderRadius: spaces.Space20,
        backgroundColor: colors.BgSecondary,
        justifyContent: 'center',
        zIndex: 4,
        right: (0, px_1.default)(36),
        borderWidth: spaces.Space2,
        borderColor: colors.BgPrimary,
    },
    countText: {
        alignSelf: 'center',
        textAlign: 'center',
    },
    avatarOne: {
        zIndex: 1,
    },
    avatarTwo: {
        right: spaces.Space12,
        zIndex: 2,
    },
    avatarThree: {
        right: spaces.Space24,
        zIndex: 3,
    },
    avatarFour: {
        right: (0, px_1.default)(36),
        zIndex: 4,
    },
}));
