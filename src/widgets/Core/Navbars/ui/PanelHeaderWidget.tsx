import {createStyles, PanelHeader, SimpleIcon, useStyles} from '@/shared/ui';

export const PanelHeaderWidget = () => {
  const [styles] = useStyles(stylesFn);

  return (
    <PanelHeader
      title={'PanelHeader'}
      leftView={<SimpleIcon name={'icon-arrow-left'} />}
      rightView={<SimpleIcon name={'icon-camera'} />}
      containerStyle={styles.container}
    />
  );
};

const stylesFn = createStyles(({colors}) => ({
  container: {
    backgroundColor: colors.BgAccent,
  },
}));
