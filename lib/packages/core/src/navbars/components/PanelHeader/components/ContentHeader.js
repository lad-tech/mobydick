"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const View_1 = __importDefault(require("../../../../basic/components/View/View"));
const other_1 = require("../../../../other");
const typography_1 = require("../../../../typography");
const styles_1 = require("../../../../styles");
const px_1 = __importDefault(require("../../../../styles/utils/px"));
const ContentHeader = props => {
    const { title, titleFont = 'SemiBold-Secondary-M', titleStyle, titleViewStyle, titleView, rightView, leftView, subtitle, subtitleFont = 'Regular-Tertiary-XXS', subtitleStyle, containerStyle, rightViewStyle, leftViewStyle, } = props;
    const [styles] = (0, styles_1.useStyles)(stylesCreate);
    const [widthLeftView, setWidthLeftView] = (0, react_1.useState)((0, px_1.default)(24));
    const [widthRightView, setWidthRightView] = (0, react_1.useState)((0, px_1.default)(24));
    const onLayoutLeftView = (0, react_1.useCallback)((event) => {
        setWidthLeftView(event.nativeEvent.layout.width);
    }, []);
    const onLayoutRightView = (0, react_1.useCallback)((event) => {
        setWidthRightView(event.nativeEvent.layout.width);
    }, []);
    const widthSideView = widthLeftView > widthRightView ? widthLeftView : widthRightView;
    return (<View_1.default style={[styles.container, containerStyle]}>
      {leftView ? (<View_1.default style={[styles.leftView, { minWidth: widthSideView }, leftViewStyle]} onLayout={onLayoutLeftView} accessibilityLabel={other_1.LABELS.panelHeaderLeftView}>
          {leftView}
        </View_1.default>) : (<View_1.default style={{ width: widthRightView }}/>)}

      <View_1.default style={[styles.titleView, titleViewStyle]}>
        {titleView || (<View_1.default style={styles.defaultTitleView}>
            {title && (<typography_1.Typography numberOfLines={1} style={[styles.title, titleStyle]} font={titleFont}>
                {title}
              </typography_1.Typography>)}
            {subtitle && (<typography_1.Typography numberOfLines={1} style={[styles.title, subtitleStyle]} font={subtitleFont}>
                {subtitle}
              </typography_1.Typography>)}
          </View_1.default>)}
      </View_1.default>

      {rightView ? (<View_1.default style={[styles.rightView, { minWidth: widthSideView }, rightViewStyle]} onLayout={onLayoutRightView} accessibilityLabel={other_1.LABELS.panelHeaderRightView}>
          {rightView}
        </View_1.default>) : (<View_1.default style={{ width: widthLeftView }}/>)}
    </View_1.default>);
};
const stylesCreate = (0, styles_1.createStyles)(({ spaces }) => ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spaces.Space20,
        paddingVertical: spaces.Space10,
        height: (0, px_1.default)(60),
    },
    leftView: {
        alignItems: 'flex-start',
        maxWidth: (0, px_1.default)(96),
    },
    titleView: {
        flex: 2,
        paddingHorizontal: spaces.Space8,
    },
    rightView: {
        alignItems: 'flex-end',
        maxWidth: (0, px_1.default)(96),
    },
    title: {
        textAlign: 'center',
    },
    defaultTitleView: {
        alignItems: 'center',
    },
}));
exports.default = ContentHeader;
