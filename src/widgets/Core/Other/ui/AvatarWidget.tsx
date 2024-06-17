import {
  Avatar,
  AvatarGroup,
  createStyles,
  IAvatarSize,
  IAvatarTypes,
  IBadgeTypes,
  ICounterTypes,
  IIndicatorTypes,
  IStatusTypes,
  TypographyLegacy,
  useStyles,
  View,
} from '@shared/ui';
import Header from '@shared/ui/Header';
import {
  defaultGroupDateTest,
  defaultUserTest,
  smallGroupDateTest,
  userTest,
  userWithLogoTest,
} from '@shared/lib/test/data/avatar';

export const AvatarWidget = () => {
  const [styles] = useStyles(stylesFn);

  return (
    <View>
      <Header title={'Avatar'} />
      <View style={styles.container}>
        <TypographyLegacy>{'Content'}</TypographyLegacy>
        <View style={styles.row}>
          <Avatar user={userTest} />
          <Avatar user={userWithLogoTest} />
          <Avatar user={userTest} type={IAvatarTypes.icon} />
        </View>
        <TypographyLegacy>{'State'}</TypographyLegacy>
        <View style={styles.row}>
          <Avatar
            user={userTest}
            type={IAvatarTypes.icon}
            backgroundColor={'green'}
          />
          <Avatar
            user={userTest}
            type={IAvatarTypes.icon}
            backgroundColor={'green'}
            disabled={true}
          />
        </View>
        <TypographyLegacy>{'Size'}</TypographyLegacy>
        <View style={styles.row}>
          <Avatar user={userTest} size={IAvatarSize.S} />
          <Avatar user={userTest} size={IAvatarSize.M} />
          <Avatar user={userTest} size={IAvatarSize.L} />
          <Avatar user={userTest} size={IAvatarSize.XL} />
        </View>
        <TypographyLegacy>{'Badge'}</TypographyLegacy>
        <View style={styles.row}>
          <Avatar
            user={userWithLogoTest}
            badge={{type: IBadgeTypes.status, value: IStatusTypes.star}}
          />
          <Avatar
            user={userWithLogoTest}
            badge={{
              type: IBadgeTypes.indicator,
              value: IIndicatorTypes.secondary,
            }}
          />
          <Avatar
            user={userWithLogoTest}
            badge={{
              type: IBadgeTypes.indicator,
              value: IIndicatorTypes.primary,
            }}
          />
        </View>
        <TypographyLegacy>{'Badge counter'}</TypographyLegacy>
        <View style={styles.row}>
          <Avatar
            user={userWithLogoTest}
            badge={{
              type: IBadgeTypes.counter,
              value: ICounterTypes.attention,
              count: 99,
            }}
          />
          <Avatar
            user={userWithLogoTest}
            badge={{
              type: IBadgeTypes.counter,
              value: ICounterTypes.accent,
              count: 1,
            }}
          />
          <Avatar
            user={userWithLogoTest}
            badge={{
              type: IBadgeTypes.counter,
              value: ICounterTypes.accentLight,
              count: 111,
            }}
          />
          <Avatar
            user={userWithLogoTest}
            badge={{
              type: IBadgeTypes.counter,
              value: ICounterTypes.muted,
              count: 2,
            }}
          />
          <Avatar
            user={userWithLogoTest}
            badge={{
              type: IBadgeTypes.counter,
              value: ICounterTypes.mutedLight,
              count: 42,
            }}
          />
        </View>
        <TypographyLegacy>{'Group'}</TypographyLegacy>
        <View style={styles.row}>
          <AvatarGroup
            groups={defaultGroupDateTest.concat(defaultGroupDateTest)}
          />
          <AvatarGroup
            groups={smallGroupDateTest.concat(Array(101).fill(defaultUserTest))}
            backgroundColor={'#ff0000'}
            type={IAvatarTypes.text}
            groupCount={50}
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
