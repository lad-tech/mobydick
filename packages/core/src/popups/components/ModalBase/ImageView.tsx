import React, {FC, ReactElement} from 'react';
import {ViewStyle} from 'react-native';

import useStyles from '../../../styles/theme/hooks/useStyles';
import View from '../../../basic/components/View/View';

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
