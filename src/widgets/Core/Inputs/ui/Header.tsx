import {StyleSheet} from 'react-native';
import {FC} from 'react';

import {createStyles, Typography, useStyles} from 'shared/ui';

const Header: FC<{title: string}> = ({title}) => {
  const [styles] = useStyles(styleSource);
  return (
    <Typography font={'Regular-Black-H5'} style={styles.h5}>
      {title}
    </Typography>
  );
};

const styleSource = createStyles(({spaces}) => {
  return StyleSheet.create({
    h5: {
      marginBottom: spaces.Space8,
    },
  });
});

export default Header;
