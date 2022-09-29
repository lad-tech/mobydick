import {IContentProps, SnackbarBase} from '@npm/mobydick-popups';
import React, {FC} from 'react';
import {boolean, select, text} from '@storybook/addon-knobs';
import {rem, SimpleIcon, useTheme} from '@npm/mobydick-styles';
import {TouchableOpacity} from '@npm/mobydick-core';
import {Typography} from '@npm/mobydick-typography';

import selectFont from '../../../utils/selectFont';

enum IPlacement {
  start = 'flex-start',
  center = 'center',
  end = 'flex-end',
}

const ExampleSnackbar: FC<IContentProps> = props => {
  const {colors} = useTheme();
  const {onClose} = props;

  const placement = select('Placement', IPlacement, IPlacement.end);

  return (
    <SnackbarBase {...props} overlayStyle={{justifyContent: placement}}>
      {boolean('show icon', true) && (
        <SimpleIcon
          name={'icon-check'}
          color={colors.IconAdditional}
          style={{
            paddingRight: rem(8),
          }}
        />
      )}
      <SnackbarBase.Title
        title={text('title', 'Подборка добавлена')}
        titleFont={select('Snackbar font', selectFont, 'Regular-Primary-XS')}
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
