import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  IButtonSize,
  IButtonTypes,
  IContentProps,
  ModalBase,
  useStyles,
} from '@npm/mobydick-core';

import stylesCreate from './stylesCreate';
import {IButtonView, IModalCalendar} from './types';
import Calendar from './Calendar';

const ACCEPT_STR = 'Применить';
const CANCEL_STR = 'Сбросить';

const ModalCalendar: FC<IContentProps & IModalCalendar> = props => {
  const {
    onClose,
    bottomView,
    onDateRangeChange,
    descriptionText,
    buttonView,
    typeLeft,
    textLeft,
    typeRight,
    textRight,
    descriptionFont = 'Regular-Muted-M',
    isShowToday = true,
    titleFont = 'Medium-Primary-M',
    titlePrefix = 'Выбрано ',
    titleSuffix = ' д',
    isCounter = true,
    onAcceptDateRangeChange,
    ...rest
  } = props;
  const [styles] = useStyles(stylesCreate);
  const [date, setDate] = useState<{
    dateStart: string;
    dateEnd: string;
    lengthDateRange: number;
  }>({dateStart: '', dateEnd: '', lengthDateRange: 0});
  const [isClear, setClear] = useState(false);

  const onAccept = useCallback(() => {
    onDateRangeChange?.(date);
    onAcceptDateRangeChange?.(date);
    onClose();
  }, [date, onClose, onDateRangeChange, date]);

  const onClear = useCallback(() => {
    setClear(true);
    onDateRangeChange?.(date);
  }, []);

  const defaultBottomView = bottomView || (
    <>
      {
        <ModalBase.TextContent
          title={
            isCounter
              ? titlePrefix + date.lengthDateRange + titleSuffix
              : undefined
          }
          titleFont={titleFont}
          descriptionText={descriptionText}
          descriptionFont={descriptionFont}
        />
      }

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
          onPressLeft={onClear}
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
