import React, {useState} from 'react';
import {DropDown, IInputsTypes, IListItem} from '@npm/mobydick-inputs';
import {number, select, text} from '@storybook/addon-knobs';
import {rem} from '@npm/mobydick-styles';
import {Typography} from '@npm/mobydick-typography';

type ILanguage = {
  id: number;
  code: 'ru' | 'en' | 'bn';
  name: string;
};

const ExampleArrayOfObjects = () => {
  const [selected, setSelected] = useState<ILanguage>();

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
        type={select('type', IInputsTypes, IInputsTypes.default)}
        buttonStyle={{
          height: number('button height', rem(40)),
          width: number('button width', rem(300)),
        }}
        flatListStyle={{width: number('list width', rem(300))}}
      />
      <Typography>{JSON.stringify(selected, null, 2)}</Typography>
    </>
  );
};

export default ExampleArrayOfObjects;
