import React, {useState} from 'react';
import {DropDown, IInputsTypes} from '@npm/mobydick-inputs';
import {array, boolean, number, select, text} from '@storybook/addon-knobs';
import {
  iconNames,
  rem,
  SimpleIcon,
  SimpleIconName,
  useTheme,
} from '@npm/mobydick-styles';

import selectFont from '../../../utils/selectFont';

const ExampleArrayOfStrings = () => {
  const [selected, setSelected] = useState<string>();
  const {colors} = useTheme();

  return (
    <DropDown
      selectedItem={selected}
      placeholder={text('Placeholder', 'Выберите язык')}
      label={text('Title', 'Язык')}
      list={array('List', [
        'Русский',

        'English',

        'Deutsch',

        'Japanese',

        'Bulgarian',
      ])}
      onPress={item => setSelected(item.value)}
      disabled={boolean('Disabled', false)}
      type={select('Type', IInputsTypes, IInputsTypes.default)}
      subtitle={text('Subtitle', '')}
      subtitleIcon={
        select(
          'SubtitleIcon name',
          iconNames,
          'icon-arrow-down',
        ) as SimpleIconName
      }
      rightIcon={
        <SimpleIcon
          name={
            select('Icon name', iconNames, 'icon-arrow-down') as SimpleIconName
          }
          color={colors.IconMuted}
        />
      }
      buttonStyle={{
        height: number('Button height', rem(40)),
        width: number('Button width', rem(300)),
      }}
      flatListStyle={{width: number('List width', rem(300))}}
      buttonTextFont={select('Button font', selectFont, 'Regular-Muted-M')}
      labelFont={select('Label font', selectFont, 'Medium-Tertiary-XS')}
      flatListTextFont={select(
        'Flatlist font',
        selectFont,
        'Regular-Secondary-M',
      )}
      buttonTextFontChosen={select(
        'Button chosen font',
        selectFont,
        'Medium-Primary-M',
      )}
      flatListTextFontPressed={select(
        'Button pressed font',
        selectFont,
        'Medium-Primary-M',
      )}
    />
  );
};

export default ExampleArrayOfStrings;
