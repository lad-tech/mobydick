import React, {useState} from 'react';

import {DropDown, IInputsTypes, Typography} from '@lad-tech/mobydick-core';

const ExampleArrayOfObjects = ({
  placeholder,
  buttonHeight,
  buttonWidth,
  listWidth,
  required,
  title,
  type,
}: {
  placeholder: string;
  title: string;
  buttonHeight: number;
  buttonWidth: number;
  listWidth: number;
  required: boolean;
  type: IInputsTypes;
}) => {
  const [selected, setSelected] = useState<number>();

  const listObject = [
    {label: 'Русский язык', value: 1},
    {label: 'English', value: 2},
    {label: 'Bengali', value: 3},
  ];

  return (
    <>
      <DropDown
        list={listObject}
        onPress={item => setSelected(item)}
        selectedItem={1 as number}
        placeholder={placeholder}
        title={title}
        type={type}
        buttonStyle={{
          height: buttonHeight,
          width: buttonWidth,
        }}
        required={required}
        flatListStyle={{width: listWidth}}
      />
      <Typography>{JSON.stringify(selected, null, 2)}</Typography>
    </>
  );
};

export default ExampleArrayOfObjects;
