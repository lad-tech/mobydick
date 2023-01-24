import React, {FC, ReactElement, useEffect, useState} from 'react';
import {CalendarProps} from 'react-native-calendars/src';
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
import {IButtonView, IChangeDate} from './types';
import Calendar from './Calendar';

interface ICalendar extends CalendarProps, Partial<IHorizontalButtonsView> {
  onChangeDate: (dateRange?: IChangeDate) => void;
  bottomView?: ReactElement;
  textCalendar?: string;
  textCalendarFont?: TypographyProp;
  buttonView?: IButtonView;
  isShowToday?: boolean;
}

const ACCEPT_STR = 'Применить';
const CANCEL_STR = 'Отмена';

const ModalCalendar: FC<IContentProps & ICalendar> = props => {
  const {
    onClose,
    bottomView,
    onChangeDate,
    textCalendar,
    buttonView,
    typeLeft,
    textLeft,
    typeRight,
    textRight,
    textCalendarFont,
    isShowToday = true,
  } = props;
  const [styles] = useStyles(stylesCreate);
  const [date, setDate] = useState<{dateStart: string; dateEnd: string}>();
  const [isClear, setClear] = useState(false);

  const onAccept = () => {
    onChangeDate(date);
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
        onChangeDate={setDate}
        isShowToday={isShowToday}
      />
    </ModalBase>
  );
};
export default ModalCalendar;
