import React, {FC, ReactElement, useEffect, useState} from 'react';
import {CalendarProps} from 'react-native-calendars/src';
import {boolean} from '@storybook/addon-knobs';

import {IContentProps, IHorizontalButtonsView} from '../../types';
import {ModalBase} from '../ModalBase';
import Calendar from '../Calendar/Calendar';
import {IButtonView, IChangeDate} from '../Calendar';
import useStyles from '../../../styles/theme/hooks/useStyles';
import {IButtonSize, IButtonTypes} from '../../../cta/components/Button/types';
import {TypographyProp} from '../../../typography';

import stylesCreate from './stylesCreate';

interface ICalendar extends CalendarProps, Partial<IHorizontalButtonsView> {
  onChangeDate: (dateRange?: IChangeDate) => void;
  bottomView?: ReactElement;
  textCalendar?: string;
  textCalendarFont?: TypographyProp;
  buttonView?: IButtonView;
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
        isShowToday={boolean('isShowToday', false)}
      />
    </ModalBase>
  );
};
export default ModalCalendar;
