import {createStyles, Typography, useStyles, View, Avatar} from '@shared/ui';
import Header from '@shared/ui/Header';
import {TouchableOpacity, useAnimatedShake} from '@lad-tech/mobydick-core';
import {userTest, userWithLogoTest} from '@shared/lib/test/data/avatar';

export const ShakeWidget = () => {
  const [styles] = useStyles(stylesFn);

  const shakeUserTest = useAnimatedShake();
  const shakeWithLogo = useAnimatedShake();

  const ShakeAvatarUserTest = () =>
    shakeUserTest.childrenShakeElement(<Avatar user={userTest} />);

  const ShakeAvatarWithLogo = () =>
    shakeWithLogo.childrenShakeElement(<Avatar user={userWithLogoTest} />);

  return (
    <View>
      <Header title={'Shake'} />
      <View style={styles.container}>
        <Typography>Shake Elements</Typography>
        <View style={styles.row}>
          <TouchableOpacity onPress={shakeUserTest.handleShake}>
            <ShakeAvatarUserTest />
          </TouchableOpacity>

          <TouchableOpacity onPress={shakeWithLogo.handleShake}>
            <ShakeAvatarWithLogo />
          </TouchableOpacity>
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
