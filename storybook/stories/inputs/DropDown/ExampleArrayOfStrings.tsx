import React, {useState} from 'react';
import {array, boolean, number, select, text} from '@storybook/addon-knobs';

import selectFont from '../../../utils/selectFont';

import {
  DropDown,
  IInputsTypes,
  iconNames,
  rem,
  SimpleIcon,
  useTheme,
} from '@npm/mobydick-core';

const ExampleArrayOfStrings = () => {
  const [selected, setSelected] = useState<string>();
  const {colors} = useTheme();
  const subtitleIconName = select(
    'subtitleIcon name',
    iconNames,
    'icon-arrow-down',
  );

  return (
    <DropDown
      selectedItem={selected}
      placeholder={text('placeholder', 'Выберите язык')}
      title={text('title', 'Язык')}
      list={array('list', [
        'Русский',

        'English',

        'Deutsch',

        'Japanese',

        'Bulgarian',
      ])}
      onPress={item => setSelected(item)}
      disabled={boolean('disabled', false)}
      type={select('type', IInputsTypes, IInputsTypes.default)}
      subtitle={text('subtitle', 'Подпись')}
      subtitleIcon={
        boolean('show subtitleIcon', false) ? subtitleIconName : undefined
      }
      required={boolean('required', false)}
      rightIcon={
        <SimpleIcon
          name={select('icon name', iconNames, 'icon-arrow-down')}
          color={colors.IconMuted}
        />
      }
      buttonStyle={{
        height: number('button height', rem(40)),
        width: number('button width', rem(300)),
      }}
      flatListStyle={{width: number('list width', rem(300))}}
      buttonTextFont={select('button font', selectFont, 'Regular-Muted-M')}
      titleFont={select('label font', selectFont, 'Medium-Tertiary-XS')}
      flatListTextFont={select(
        'flatlist font',
        selectFont,
        'Regular-Secondary-M',
      )}
      buttonTextFontChosen={select(
        'button chosen font',
        selectFont,
        'Medium-Primary-M',
      )}
      flatListTextFontPressed={select(
        'button pressed font',
        selectFont,
        'Medium-Primary-M',
      )}
    />
  );
};

export default ExampleArrayOfStrings;
