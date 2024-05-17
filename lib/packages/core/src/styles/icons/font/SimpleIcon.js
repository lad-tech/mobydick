"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconNames = void 0;
const react_1 = require("react");
const Text_1 = __importDefault(require("../../../basic/components/Text/Text"));
const useTheme_1 = __importDefault(require("../../hooks/useTheme"));
const px_1 = __importDefault(require("../../utils/px"));
const unicodesMap_json_1 = __importDefault(require("./unicodesMap.json"));
const SimpleIcon = ({ size = (0, px_1.default)(24), name, style, color, }) => {
    const { colors } = (0, useTheme_1.default)();
    const resolveGlyph = (0, react_1.useCallback)((iconName) => {
        const glyph = unicodesMap_json_1.default[iconName];
        return String.fromCodePoint(glyph);
    }, []);
    const icon = (0, react_1.useMemo)(() => resolveGlyph(name), [name]);
    const textStyle = {
        fontSize: size,
        fontFamily: 'Neotis',
        color: color ?? colors.IconNeutral,
        ...style,
    };
    return <Text_1.default style={textStyle}>{icon}</Text_1.default>;
};
exports.iconNames = Object.keys(unicodesMap_json_1.default);
exports.default = SimpleIcon;
