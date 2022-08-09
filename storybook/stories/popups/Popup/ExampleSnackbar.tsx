import {IContentProps} from '@npm/mobydick-popups';
import React, {FC} from 'react';
import {boolean, select, text} from '@storybook/addon-knobs';
import {SimpleIcon, useTheme} from '@npm/mobydick-styles';
import {Button, ISize} from '@npm/mobydick-cta';
import {SnackbarBase} from '@npm/mobydick-popups/src/components/SnackbarBase';

const ExampleSnackbar: FC<IContentProps> = props => {
  const {colors} = useTheme();
  const {onClose} = props;
  enum IPlacement {
    start = 'flex-start',
    center = 'center',
    end = 'flex-end',
  }
  const placement = select('Placement', IPlacement, IPlacement.end);

  return (
    <SnackbarBase {...props} overlayStyle={{justifyContent: placement}}>
      {boolean('show icon', true) && (
        <SimpleIcon
          name={'icon-check'}
          color={colors.IconFavorite}
          style={{
            paddingRight: 8,
          }}
        />
      )}
      <SnackbarBase.Title title={text('title', 'Подборка добавлена')} />
      {boolean('show right button ', true) && (
        <Button
          text={text('text button', 'Поделиться')}
          onPress={onClose}
          textStyle={{
            fontSize: 14,
            color: colors.TextAccent,
            textAlign: 'center',
          }}
          style={{backgroundColor: 'transparent', padding: 0}}
          size={ISize.small}
        />
      )}
    </SnackbarBase>
  );
};

export default ExampleSnackbar;
