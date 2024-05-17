"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipWidget = void 0;
const react_1 = require("react");
const ui_1 = require("@shared/ui");
const TooltipWidget = () => {
    const ref = (0, react_1.useRef)(null);
    const [styles] = (0, ui_1.useStyles)(styleFn);
    const { openPopup } = (0, ui_1.usePopups)();
    return (<ui_1.View style={styles.container}>
      <ui_1.Typography font={'Regular-Primary-H5'}>Tooltip</ui_1.Typography>
      <ui_1.View ref={ref} style={styles.ref}>
        <ui_1.Typography>Ref component</ui_1.Typography>
      </ui_1.View>
      <ui_1.Button text={'Tooltip'} onPress={() => openPopup({
            Content: props => (<ui_1.TooltipBase position={ui_1.IPosition.bottom} placement={ui_1.IPlacement.center} refCurrent={ref} {...props}>
                <ui_1.TooltipBase.Title title={'Tooltip title'}/>
                <ui_1.TooltipBase.DescriptionText descriptionText={'Tooltip descriptionText'}/>
                <ui_1.TooltipBase.Arrow position={ui_1.IPosition.bottom} placement={ui_1.IPlacement.center}/>
                <ui_1.TooltipBase.LeftButton text={'Left button'}/>
              </ui_1.TooltipBase>),
        })}/>
    </ui_1.View>);
};
exports.TooltipWidget = TooltipWidget;
const styleFn = (0, ui_1.createStyles)(({ spaces, colors }) => ({
    container: { gap: spaces.Space8 },
    ref: {
        alignItems: 'center',
        padding: spaces.Space8,
        backgroundColor: colors.BgAccent,
    },
}));
