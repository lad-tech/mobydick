import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Button} from '@npm/mobydick-cta';
import {View} from '@npm/mobydick-core';
import {
  setCurrentTheme,
  CurrentTheme,
  getCurrentTheme,
  useStyles,
  useTheme,
} from '@npm/mobydick-styles';
import {StyleSheet} from 'react-native';

import CenterView from '../../CenterView';

const stylesCreate = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.BgPrimary,
      borderWidth: 1,
      borderColor: theme.BorderSoft,
    },
  });

const Theme = () => {
  const [styles] = useStyles(stylesCreate);

  const changeTheme = () => {
    setCurrentTheme(
      getCurrentTheme() === CurrentTheme.light
        ? CurrentTheme.dark
        : CurrentTheme.light,
    );
  };

  return (
    <View style={styles.container}>
      <Button text={'Change theme'} onPress={changeTheme} />
    </View>
  );
};

storiesOf('Design System/styles/theme', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => <Theme />);
