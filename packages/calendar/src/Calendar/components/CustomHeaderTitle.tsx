import {TouchableOpacity, Typography} from '@npm/mobydick-core';
import React, {FC} from 'react';

interface ICustomHeaderTitle {
  currentMonth: string;
  onPress: () => void;
}

const CustomHeaderTitle: FC<ICustomHeaderTitle> = props => {
  const {currentMonth, onPress} = props;
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Typography>{currentMonth}</Typography>
      </TouchableOpacity>
    </>
  );
};

export default CustomHeaderTitle;
