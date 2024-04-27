import {
  createStyles,
  IStatusState,
  IStatusType,
  Status,
  Typography,
  useStyles,
  View,
} from '@shared/ui';
import Header from '@shared/ui/Header';

export const StatusWidget = () => {
  const [styles] = useStyles(stylesFn);

  return (
    <View>
      <Header title={'Status'} />
      <View style={styles.container}>
        <Typography>Dot</Typography>
        <View style={styles.row}>
          <Status type={IStatusType.dot} state={IStatusState.green} />
          <Status type={IStatusType.dot} state={IStatusState.blue} />
          <Status type={IStatusType.dot} state={IStatusState.red} />
          <Status type={IStatusType.dot} state={IStatusState.gray} />
          <Status type={IStatusType.dot} state={IStatusState.orange} />
        </View>
        <Typography>Tag</Typography>
        <View style={styles.row}>
          <Status
            type={IStatusType.tag}
            state={IStatusState.green}
            text={'tag'}
          />
          <Status
            type={IStatusType.tag}
            state={IStatusState.blue}
            text={'tag'}
          />
          <Status
            type={IStatusType.tag}
            state={IStatusState.red}
            text={'tag'}
          />
          <Status
            type={IStatusType.tag}
            state={IStatusState.gray}
            text={'tag'}
          />
          <Status
            type={IStatusType.tag}
            state={IStatusState.orange}
            text={'tag'}
          />
        </View>
      </View>
    </View>
  );
};

const stylesFn = createStyles(({spaces}) => ({
  container: {
    gap: spaces.Space16,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: spaces.Space16,
  },
}));
