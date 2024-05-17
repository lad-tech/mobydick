"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionSheetWidget = void 0;
const ui_1 = require("@shared/ui");
const ActionSheetWidget = () => {
    const { openPopup } = (0, ui_1.usePopups)();
    return (<ui_1.View>
      <ui_1.Typography font={'Regular-Primary-H5'}>ActionSheet</ui_1.Typography>
      <ui_1.Button text={'ActionSheet'} onPress={() => openPopup({
            Content: props => (<ui_1.ActionSheetBase {...props}>
                <ui_1.ActionSheetBase.Item title={'firstItem'} itemType={ui_1.IItemType.firstItem} onPress={props.onClose}/>
                <ui_1.ActionSheetBase.Item title={'innerItem'} itemType={ui_1.IItemType.innerItem} onPress={props.onClose}/>
                <ui_1.ActionSheetBase.Item title={'innerItem'} radio={'radio'} itemType={ui_1.IItemType.innerItem} onPress={props.onClose}/>
                <ui_1.ActionSheetBase.Item title={'lastItem'} itemType={ui_1.IItemType.lastItem} onPress={props.onClose}/>
                <ui_1.ActionSheetBase.Item title={'cancelItem'} itemType={ui_1.IItemType.cancelItem} onPress={props.onClose}/>
              </ui_1.ActionSheetBase>),
        })}/>
    </ui_1.View>);
};
exports.ActionSheetWidget = ActionSheetWidget;
