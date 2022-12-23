import {
  IContentProps,
  IPosition,
  SnackbarBase,
  rem,
  SimpleIcon,
  useTheme,
  TouchableOpacity,
  Typography,
} from '@npm/mobydick-core';
import React, {FC} from 'react';
import {boolean, select, text} from '@storybook/addon-knobs';

import selectFont from '../../../utils/selectFont';

const ExampleSnackbar: FC<IContentProps> = props => {
  const {colors} = useTheme();
  const {onClose} = props;
  const position = select('Position', IPosition, IPosition.bottom);

  return (
    <SnackbarBase {...props} position={position} timeShow={2000}>
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
        titleFont={select('Snackbar font', selectFont, 'Regular-Contrast-XS')}
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
