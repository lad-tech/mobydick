import React, {FC, ReactElement} from 'react';
import {View} from '@npm/mobydick-core';
import {useStyles} from '@npm/mobydick-styles';
import {ViewStyle} from 'react-native';

import stylesCreate from './stylesCreate';

interface IProps {
  image: ReactElement;
  imageStyles?: ViewStyle | ViewStyle[];
}

const ImageView: FC<IProps> = props => {
  const [styles] = useStyles(stylesCreate);

  return (
    <View style={[styles.imageView, props.imageStyles]}>{props.image}</View>
  );
};

export default ImageView;
