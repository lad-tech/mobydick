import {useState} from 'react';

import {
  Button,
  createStyles,
  IButtonSize,
  IButtonTypes,
  SimpleIcon,
  useStyles,
  View,
} from 'shared/ui';
import Header from 'shared/ui/Header';

export const ButtonWidget = () => {
  const [styles] = useStyles(style);
  const [counter, setCounter] = useState(99);

  const onChangeCounter = (value: number) => () => {
    setCounter(val => val + value);
  };

  return (
    <View style={styles.container}>
      <Header title={'Type'} />
      <View style={styles.content}>
        <Button type={IButtonTypes.primary} text={'IButtonTypes.primary'} />
        <Button type={IButtonTypes.secondary} text={'IButtonTypes.secondary'} />
        <Button type={IButtonTypes.tertiary} text={'IButtonTypes.tertiary'} />
        <Button type={IButtonTypes.loading} text={'IButtonTypes.loading'} />
        <Button
          type={IButtonTypes.destructive}
          text={'IButtonTypes.destructive'}
        />
        <Button type={IButtonTypes.disabled} text={'IButtonTypes.disabled'} />
      </View>

      <Header title={'Size'} />
      <View style={styles.content}>
        <Button size={IButtonSize.fixed} text={'IButtonSize.fixed'} />
        <Button size={IButtonSize.large} text={'IButtonSize.large'} />
        <Button size={IButtonSize.small} text={'IButtonSize.small'} />
      </View>

      <Header title={'Icons'} />
      <View style={styles.content}>
        <Button
          text={'leftIcon'}
          leftIcon={<SimpleIcon name={'icon-send'} />}
        />
        <Button
          text={'rightIcon'}
          rightIcon={<SimpleIcon name={'icon-send'} />}
        />
        <Button
          text={'both'}
          leftIcon={<SimpleIcon name={'icon-send'} />}
          rightIcon={<SimpleIcon name={'icon-send'} />}
        />
      </View>

      <Header title={'State'} />
      <View style={styles.content}>
        <Button text={'loading'} loading={true} />
        <Button text={'disabled'} disabled={true} />
        <Button text={'both'} disabled={true} loading={true} />
      </View>

      <Header title={'Counter'} />
      <View style={styles.content}>
        <Button
          text={'increment'}
          count={counter}
          onPress={onChangeCounter(1)}
        />
        <Button
          text={'decrement'}
          count={counter}
          onPress={onChangeCounter(-1)}
        />
      </View>
    </View>
  );
};

const style = createStyles(({spaces}) => ({
  container: {
    gap: spaces.Space4,
  },
  content: {
    alignItems: 'center',
    gap: spaces.Space4,
  },
}));
