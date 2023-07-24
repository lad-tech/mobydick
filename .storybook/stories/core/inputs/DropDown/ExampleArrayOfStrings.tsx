import React, {useState} from 'react';

import {
  DropDown,
  IInputsTypes,
  SimpleIcon,
  SimpleIconName,
  TypographyProp,
  useTheme,
} from '@lad-tech/mobydick-core';

const ExampleArrayOfStrings = ({
  subtitleIconName,
  placeholder,
  title,
  list,
  disabled,
  type,
  subtitle,
  showSubtitleIcon,
  required,
  iconName,
  buttonHeight,
  buttonWidth,
  listWidth,
  buttonFont,
  titleFont,
  flatlistFont,
  buttonTextFontChosen,
  flatListTextFontPressed,
}: {
  subtitleIconName: SimpleIconName;
  placeholder: string;
  title: string;
  list: string[];
  disabled: boolean;
  type: IInputsTypes;
  subtitle: string;
  showSubtitleIcon: boolean;
  required: boolean;
  iconName: SimpleIconName;
  buttonHeight: number;
  buttonWidth: number;
  listWidth: number;
  buttonFont: TypographyProp;
  titleFont: TypographyProp;
  flatlistFont: TypographyProp;
  buttonTextFontChosen: TypographyProp;
  flatListTextFontPressed: TypographyProp;
}) => {
  const [selected, setSelected] = useState<string>();
  const {colors} = useTheme();

  return (
    <DropDown
      selectedItem={selected}
      placeholder={placeholder}
      title={title}
      list={list}
      onPress={item => setSelected(item)}
      disabled={disabled}
      type={type}
      subtitle={subtitle}
      subtitleIcon={showSubtitleIcon ? subtitleIconName : undefined}
      required={required}
      rightIcon={<SimpleIcon name={iconName} color={colors.IconMuted} />}
      buttonStyle={{
        height: buttonHeight,
        width: buttonWidth,
      }}
      flatListStyle={{width: listWidth}}
      buttonTextFont={buttonFont}
      titleFont={titleFont}
      flatListTextFont={flatlistFont}
      buttonTextFontChosen={buttonTextFontChosen}
      flatListTextFontPressed={flatListTextFontPressed}
    />
  );
};

export default ExampleArrayOfStrings;
