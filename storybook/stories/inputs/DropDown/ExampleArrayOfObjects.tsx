import React, {useState} from 'react';
import {DropDown, IInputsTypes, IListItem} from '@npm/mobydick-inputs';
import {boolean, number, select, text} from '@storybook/addon-knobs';
import {
  iconNames,
  rem,
  SimpleIcon,
  SimpleIconName,
  useTheme,
} from '@npm/mobydick-styles';
import {Typography} from '@npm/mobydick-typography';

import selectFont from '../../../utils/selectFont';

type ILanguage = {
  id: number;
  code: 'ru' | 'en' | 'bn';
  name: string;
};

const ExampleArrayOfObjects = () => {
  const [selected, setSelected] = useState<ILanguage>();

  const {colors} = useTheme();
  const subtitleIconName = select(
    'subtitleIcon name',
    iconNames,
    'icon-arrow-down',
  );

  const listObject: IListItem<ILanguage>[] = [
    {label: 'Русский', value: {id: 1, code: 'ru', name: 'Русский'}},
    {label: 'English', value: {id: 2, code: 'en', name: 'English'}},
    {label: 'Bengali', value: {id: 3, code: 'bn', name: 'Bengali'}},
  ];

  return (
    <>
      <DropDown
        list={listObject}
        onPress={item => setSelected(item)}
        selectedItem={
          listObject.find(item => item.value.id === selected?.id)?.label
        }
        placeholder={text('placeholder', 'Выберите язык')}
        label={text('title', 'Язык')}
        disabled={boolean('disabled', false)}
        type={select('type', IInputsTypes, IInputsTypes.default)}
        subtitle={text('subtitle', 'Подпись')}
        subtitleIcon={
          boolean('show subtitleIcon', false) ? subtitleIconName : undefined
        }
        rightIcon={
          <SimpleIcon
            name={
              select(
                'icon name',
                iconNames,
                'icon-arrow-down',
              ) as SimpleIconName
            }
            color={colors.IconMuted}
          />
        }
        buttonStyle={{
          height: number('button height', rem(40)),
          width: number('button width', rem(300)),
        }}
        flatListStyle={{width: number('list width', rem(300))}}
        buttonTextFont={select('button font', selectFont, 'Regular-Muted-M')}
        labelFont={select('label font', selectFont, 'Medium-Tertiary-XS')}
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
      <Typography>{JSON.stringify(selected, null, 2)}</Typography>
    </>
  );
};

export default ExampleArrayOfObjects;
