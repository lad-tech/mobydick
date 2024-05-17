"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mobydick_core_1 = require("@lad-tech/mobydick-core");
const stylesCreate_1 = __importDefault(require("./stylesCreate"));
const types_1 = require("./types");
const Calendar_1 = __importDefault(require("./Calendar"));
const ACCEPT_STR = 'Применить';
const CANCEL_STR = 'Сбросить';
const ModalCalendar = props => {
    const { onClose, bottomView, onDateRangeChange, descriptionText, buttonView, typeLeft, textLeft, typeRight, textRight, descriptionFont = 'Regular-Muted-M', isShowToday = true, titleFont = 'Medium-Primary-M', titlePrefix = 'Выбрано ', titleSuffix = ' д', isCounter = true, onAcceptDateRangeChange, ...rest } = props;
    const [styles] = (0, mobydick_core_1.useStyles)(stylesCreate_1.default);
    const [date, setDate] = (0, react_1.useState)({ dateStart: '', dateEnd: '', lengthDateRange: 0 });
    const [isClear, setClear] = (0, react_1.useState)(false);
    const onAccept = (0, react_1.useCallback)(() => {
        onDateRangeChange?.(date);
        onAcceptDateRangeChange?.(date);
        onClose();
    }, [date, onClose, onDateRangeChange, date]);
    const onClear = (0, react_1.useCallback)(() => {
        setClear(true);
        onDateRangeChange?.(date);
    }, []);
    const defaultBottomView = bottomView || (<>
      {<mobydick_core_1.ModalBase.TextContent title={isCounter
                ? titlePrefix + date.lengthDateRange + titleSuffix
                : undefined} titleFont={titleFont} descriptionText={descriptionText} descriptionFont={descriptionFont}/>}

      {buttonView === types_1.IButtonView.small && (<mobydick_core_1.ModalBase.VerticalButtonsView>
          <mobydick_core_1.ModalBase.VerticalButton text={textRight || ACCEPT_STR} size={mobydick_core_1.IButtonSize.small} onPress={onAccept}/>
        </mobydick_core_1.ModalBase.VerticalButtonsView>)}
      {buttonView === types_1.IButtonView.large && (<mobydick_core_1.ModalBase.HorizontalButtonsView typeLeft={typeLeft || mobydick_core_1.IButtonTypes.secondary} textLeft={textLeft || CANCEL_STR} typeRight={typeRight || mobydick_core_1.IButtonTypes.primary} textRight={textRight || ACCEPT_STR} disabledLeft={!date?.dateStart && !date?.dateEnd} disabledRight={!date?.dateStart && !date?.dateEnd} onPressRight={onAccept} onPressLeft={onClear}/>)}
    </>);
    (0, react_1.useEffect)(() => {
        setClear(false);
    }, [date]);
    return (<mobydick_core_1.ModalBase containerStyle={styles.contentCalendar} overlayStyle={styles.overlayStyle} {...props}>
      <mobydick_core_1.ModalBase.CloseIcon onPress={onClose}/>
      <Calendar_1.default bottomView={defaultBottomView} isClear={isClear} onDateRangeChange={setDate} isShowToday={isShowToday} {...rest}/>
    </mobydick_core_1.ModalBase>);
};
exports.default = ModalCalendar;
