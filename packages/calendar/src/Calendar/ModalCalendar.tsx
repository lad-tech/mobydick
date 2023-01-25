import React, {FC, useEffect, useState} from 'react';
import {
  IButtonSize,
  IButtonTypes,
  IContentProps,
  IHorizontalButtonsView,
  ModalBase,
  TypographyProp,
  useStyles,
} from '@npm/mobydick-core';

import stylesCreate from './stylesCreate';
import {IButtonView, ICalendar, IDateRange} from './types';
import Calendar from './Calendar';

interface IModalCalendar extends ICalendar, Partial<IHorizontalButtonsView> {
  onDateRangeChange: (dateRange?: IDateRange) => void;
  textCalendar?: string;
  textCalendarFont?: TypographyProp;
  buttonView?: IButtonView;
}

const ACCEPT_STR = 'Применить';
const CANCEL_STR = 'Отмена';

const ModalCalendar: FC<IContentProps & IModalCalendar> = props => {
  const {
    onClose,
    bottomView,
    onDateRangeChange,
    textCalendar,
    buttonView,
    typeLeft,
    textLeft,
    typeRight,
    textRight,
    textCalendarFont,
    isShowToday = true,
    ...rest
  } = props;
  const [styles] = useStyles(stylesCreate);
  const [date, setDate] = useState<{dateStart: string; dateEnd: string}>();
  const [isClear, setClear] = useState(false);

  const onAccept = () => {
    onDateRangeChange(date);
    onClose();
  };

  const defaultBottomView = bottomView || (
    <>
      {textCalendar && (
        <ModalBase.TextContent
          descriptionText={textCalendar}
          descriptionFont={textCalendarFont || 'Regular-Muted-M'}
        />
      )}

      {buttonView === IButtonView.small && (
        <ModalBase.VerticalButtonsView>
          <ModalBase.VerticalButton
            text={textRight || ACCEPT_STR}
            size={IButtonSize.small}
            onPress={onAccept}
          />
        </ModalBase.VerticalButtonsView>
      )}
      {buttonView === IButtonView.large && (
        <ModalBase.HorizontalButtonsView
          typeLeft={typeLeft || IButtonTypes.secondary}
          textLeft={textLeft || CANCEL_STR}
          typeRight={typeRight || IButtonTypes.primary}
          textRight={textRight || ACCEPT_STR}
          disabledLeft={!date?.dateStart && !date?.dateEnd}
          disabledRight={!date?.dateStart && !date?.dateEnd}
          onPressRight={onAccept}
          onPressLeft={() => setClear(true)}
        />
      )}
    </>
  );

  useEffect(() => {
    setClear(false);
  }, [date]);

  return (
    <ModalBase
      containerStyle={styles.contentCalendar}
      overlayStyle={styles.overlayStyle}
      {...props}>
      <ModalBase.CloseIcon onPress={onClose} />
      <Calendar
        bottomView={defaultBottomView}
        isClear={isClear}
        onDateRangeChange={setDate}
        isShowToday={isShowToday}
        {...rest}
      />
    </ModalBase>
  );
};
export default ModalCalendar;
