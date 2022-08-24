import {ActionSheetBase, IContentProps} from '@npm/mobydick-popups';
import React, {FC, useState} from 'react';
import {rem, SimpleIcon, useStyles} from '@npm/mobydick-styles';
import stylesCreate from '@npm/mobydick-popups/src/components/ActionSheetBase/stylesCreate';

const ExampleActionSheet: FC<IContentProps> = props => {
  const {onClose} = props;
  const [styles] = useStyles(stylesCreate);
  const [selected, setSelected] = useState<string>('');

  return (
    <ActionSheetBase {...props} containerStyle={styles.containerStyle}>
      <ActionSheetBase.FirstItem
        label={'Вы действительно хотите удалить это видео\n из Ваших видео?'}
      />
      <ActionSheetBase.InnerItem
        title={'Добавить в избранное'}
        subTitle={'Авто'}
        onPress={() => {
          setSelected('Добавить в избранное');
        }}
        leftIcon={<SimpleIcon name={'icon-edit'} size={rem(28)} />}
        selected={selected}
      />
      <ActionSheetBase.InnerItem
        title={'Поделиться'}
        onPress={() => {
          setSelected('Поделиться');
        }}
        selected={selected}
      />
      <ActionSheetBase.InnerItem
        title={'Сообщить о проблеме'}
        onPress={() => {
          setSelected('Сообщить о проблеме');
        }}
        disabled={true}
        selected={selected}
      />
      <ActionSheetBase.LastItem
        title={'Удалить'}
        onPress={onClose}
        selected={selected}
        textFont={'Regular-Error-L'}
      />
      <ActionSheetBase.CancelItem title={'Отменить'} onPress={onClose} />
    </ActionSheetBase>
  );
};

export default ExampleActionSheet;
