import {FC} from 'react';

import View from '../../../basic/components/View/View';
import {TypographyLegacy} from '../../../typography';
import {createStyles} from '../../../styles';
import useStyles from '../../../styles/hooks/useStyles';
import px from '../../../styles/utils/px';

import {ICrossedTextProps} from './types';

const CrossedText: FC<ICrossedTextProps> = ({
  children,
  style,
  lineColor,
  lineHeight = px(1),
  ...props
}) => {
  const [styles] = useStyles(stylesCreate);

  return (
    <View style={style}>
      <TypographyLegacy {...props}>{children}</TypographyLegacy>
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
