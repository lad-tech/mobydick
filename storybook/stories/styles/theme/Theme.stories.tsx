import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Button} from '@npm/mobydick-cta';
import {View} from '@npm/mobydick-core';
import {
  setCurrentTheme,
  CurrentTheme,
  getCurrentTheme,
  useStyles,
  ICurrentThemeColors,
} from '@npm/mobydick-styles';
import {FlatList, StyleSheet} from 'react-native';
import {InputField} from '@npm/mobydick-inputs';

import CenterView from '../../CenterView';

const stylesCreate = (theme: ICurrentThemeColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.BgPrimary,
      borderWidth: 1,
      borderColor: theme.BorderSoft,
    },
  });
const array = Array(100).fill(0);

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
    <>
      <FlatList
        data={array}
        renderItem={() => (
          <View style={styles.container}>
            <Button text={'Change theme'} onPress={changeTheme} />
            <InputField />
          </View>
        )}
        keyExtractor={(_item, index) => index.toString()}
      />
      <Button text={'Change theme'} onPress={changeTheme} />
    </>
  );
};

storiesOf('Design System/styles/theme', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => <Theme />);
