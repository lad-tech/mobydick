import React, {FC, ReactElement, useState} from 'react';
import {rem, useStyles} from '@npm/mobydick-styles';
import {CalendarProps} from 'react-native-calendars/src';
import {Button, IButtonSize} from '@npm/mobydick-cta';
import {Typography} from '@npm/mobydick-typography';

import {IContentProps} from '../../types';
import {ModalBase} from '../ModalBase';
import Calendar from '../Calendar/Calendar';
import {IChangeDate} from '../Calendar';

import stylesCreate from './stylesCreate';

interface ICalendar extends CalendarProps {
  onChangeDate: (dateRange?: IChangeDate) => void;
  bottomView?: ReactElement;
  textCalendar?: string;
}

const ModalCalendar: FC<IContentProps & ICalendar> = props => {
  const {onClose, bottomView, onChangeDate, textCalendar} = props;
  const [styles] = useStyles(stylesCreate);
  const [date, setDate] = useState<{dateStart: string; dateEnd: string}>();

  const defaultBottomView = bottomView || (
    <>
      {textCalendar && (
        <Typography
          font={'Regular-Secondary-M'}
          style={{textAlign: 'center', paddingBottom: rem(32)}}>
          {textCalendar}
        </Typography>
      )}
      <Button
        text={'Применить'}
        size={IButtonSize.small}
        onPress={() => onChangeDate(date)}
      />
    </>
  );

  return (
    <ModalBase
      containerStyle={styles.contentCalendar}
      overlayStyle={styles.overlayStyle}
      {...props}>
      <ModalBase.CloseIcon onPress={onClose} />
      <Calendar bottomView={defaultBottomView} onChangeDate={setDate} />
    </ModalBase>
  );
};
export default ModalCalendar;
