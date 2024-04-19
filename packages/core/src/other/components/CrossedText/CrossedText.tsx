import {FC} from 'react';

import View from '../../../basic/components/View/View';
import {Typography} from '../../../typography';
import rem from '../../../styles/utils/rem';
import {createStyles} from '../../../styles';
import useStyles from '../../../styles/hooks/useStyles';

import {ICrossedTextProps} from './types';

const CrossedText: FC<ICrossedTextProps> = ({
  children,
  style,
  lineColor,
  lineHeight = rem(1),
  ...props
}) => {
  const [styles] = useStyles(stylesCreate);

  return (
    <View style={style}>
      <Typography {...props}>{children}</Typography>
      <View style={styles.crossed}>
        <View
          style={[
            styles.line,
            {backgroundColor: lineColor, height: lineHeight},
          ]}
        />
      </View>
    </View>
  );
};

const stylesCreate = createStyles(_ => ({
  crossed: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: '100%',
  },
}));

export default CrossedText;
