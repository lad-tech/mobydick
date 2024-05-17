"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const PopupBase_1 = require("../PopupBase");
const types_1 = require("../../types");
const useStyles_1 = __importDefault(require("../../../styles/hooks/useStyles"));
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const Title_1 = __importDefault(require("./Title"));
const DescriptionText_1 = __importDefault(require("./DescriptionText"));
const Arrow_1 = __importDefault(require("./Arrow"));
const LeftButton_1 = __importDefault(require("./LeftButton"));
const types_2 = require("./types");
const TooltipBase = props => {
    const { containerStyle, children, onClose, overlayStyle, position, placement, refCurrent, timeShow, } = props;
    const [styles] = (0, useStyles_1.default)(stylesCreate_1.default);
    const { width, height } = (0, react_native_safe_area_context_1.useSafeAreaFrame)();
    const [positionValueY, setPositionValueY] = (0, react_1.useState)(0);
    const [positionValueX, setPositionValueX] = (0, react_1.useState)(0);
    const timeout = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (timeShow) {
            timeout.current = setTimeout(() => {
                onClose();
            }, timeShow);
        }
        return () => {
            timeout.current && clearTimeout(timeout.current);
        };
    }, []);
    (0, react_1.useMemo)(() => {
        refCurrent?.current?.measure((_x, _y, _width, _height, _pageX, pageY) => {
            if (pageY) {
                const androidValue = height - pageY;
                position === types_1.IPosition.top
                    ? setPositionValueY(pageY + _height)
                    : setPositionValueY(androidValue);
                placement === types_2.IPlacement.start
                    ? setPositionValueX(_pageX)
                    : setPositionValueX(width - _pageX - _width);
            }
        });
    }, []);
    if (positionValueY === 0) {
        return null;
    }
    return (<PopupBase_1.PopupBase onClose={onClose} overlayStyle={[styles.overlayStyle, overlayStyle]}>
      <react_native_1.Animated.View style={[
            styles.container,
            containerStyle,
            position === types_1.IPosition.top && {
                top: positionValueY,
            },
            position === types_1.IPosition.bottom && {
                bottom: positionValueY,
            },
            placement === types_2.IPlacement.start && {
                left: positionValueX,
            },
            placement === types_2.IPlacement.end && {
                right: positionValueX,
            },
        ]}>
        {children}
      </react_native_1.Animated.View>
    </PopupBase_1.PopupBase>);
};
TooltipBase.Title = Title_1.default;
TooltipBase.DescriptionText = DescriptionText_1.default;
TooltipBase.Arrow = Arrow_1.default;
TooltipBase.LeftButton = LeftButton_1.default;
exports.default = TooltipBase;
