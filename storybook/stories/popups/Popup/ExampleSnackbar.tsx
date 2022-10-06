import {IContentProps, IPosition, SnackbarBase} from '@npm/mobydick-popups';
import React, {FC} from 'react';
import {boolean, select, text} from '@storybook/addon-knobs';
import {rem, SimpleIcon, useTheme} from '@npm/mobydick-styles';
import {TouchableOpacity} from '@npm/mobydick-core';
import {Typography} from '@npm/mobydick-typography';

import selectFont from '../../../utils/selectFont';

const ExampleSnackbar: FC<IContentProps> = props => {
  const {colors} = useTheme();
  const {onClose} = props;
  const position = select('Position', IPosition, IPosition.bottom);

  return (
    <SnackbarBase
      {...props}
      containerStyle={{alignItems: 'flex-start'}}
      position={position}
      timeShow={2000}>
      {boolean('show icon', true) && (
        <SimpleIcon
          name={'icon-noconnection'}
          color={colors.IconMuted}
          style={{
            paddingRight: rem(8),
          }}
        />
      )}
      <SnackbarBase.Title
        title={text(
          'title',
          'Для перехода нужен интернет. \n' +
            'Когда подключение появится, HUAWEI Wallet станет доступен',
        )}
        titleFont={select('Snackbar font', selectFont, 'Medium-Contrast-XS')}
      />
      {boolean('show right button ', true) && (
        <TouchableOpacity onPress={onClose}>
          <Typography font={'Medium-AccentContrast-XS'}>
            {text('text button', 'Поделиться')}
          </Typography>
        </TouchableOpacity>
      )}
    </SnackbarBase>
  );
};

export default ExampleSnackbar;
