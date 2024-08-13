import {useState} from 'react';

import {
  Button,
  createStyles,
  IButtonSize,
  IButtonTypes,
  IStateBtn,
  SimpleIcon,
  useStyles,
  View,
} from '@shared/ui';
import Header from '@shared/ui/Header';

export const ButtonWidget = () => {
  const [styles] = useStyles(style);
  const [counter, setCounter] = useState(99);

  const onChangeCounter = (value: number) => () => {
    setCounter(val => val + value);
  };

  return (
    <View style={styles.container}>
      <Header title={'Type Default'} />
      <View style={styles.content}>
        <Button type={IButtonTypes.primary} text={'IButtonTypes.primary'} />
        <Button type={IButtonTypes.secondary} text={'IButtonTypes.secondary'} />
        <Button type={IButtonTypes.tertiary} text={'IButtonTypes.tertiary'} />
      </View>
      <Header title={'Type Danger'} />
      <View style={styles.content}>
        <Button
          type={IButtonTypes.primary}
          text={'IButtonTypes.primary'}
          state={IStateBtn.danger}
        />
        <Button
          type={IButtonTypes.secondary}
          text={'IButtonTypes.secondary'}
          state={IStateBtn.danger}
        />
        <Button
          type={IButtonTypes.tertiary}
          text={'IButtonTypes.tertiary'}
          state={IStateBtn.danger}
        />
      </View>
      <Header title={'Type Disable'} />
      <View style={styles.content}>
        <Button
          type={IButtonTypes.primary}
          text={'IButtonTypes.primary'}
          state={IStateBtn.disabled}
        />
        <Button
          type={IButtonTypes.secondary}
          text={'IButtonTypes.secondary'}
          state={IStateBtn.disabled}
        />
        <Button
          type={IButtonTypes.tertiary}
          text={'IButtonTypes.tertiary'}
          state={IStateBtn.disabled}
        />
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

      <Header title={'Loading Default'} />
      <View style={styles.content}>
        <Button text={'loading'} loading={true} />
        <Button text={'loading'} type={IButtonTypes.tertiary} loading={true} />
        <Button text={'loading'} type={IButtonTypes.secondary} loading={true} />
      </View>

      <Header title={'Loading Disabled'} />
      <View style={styles.content}>
        <Button text={'loading'} loading={true} disabled={true} />
        <Button
          text={'loading'}
          type={IButtonTypes.tertiary}
          loading={true}
          disabled={true}
        />
        <Button
          text={'loading'}
          type={IButtonTypes.secondary}
          loading={true}
          disabled={true}
        />
      </View>

      <Header title={'Loading Danger'} />
      <View style={styles.content}>
        <Button text={'loading'} loading={true} state={IStateBtn.danger} />
        <Button
          text={'loading'}
          type={IButtonTypes.tertiary}
          loading={true}
          state={IStateBtn.danger}
        />
        <Button
          text={'loading'}
          type={IButtonTypes.secondary}
          loading={true}
          state={IStateBtn.danger}
        />
      </View>

      <Header title={'Counter Primary'} />
      <View style={styles.content}>
        <Button
          text={'increment'}
          count={counter}
          onPress={onChangeCounter(1)}
        />
        <Button
          text={'decrement'}
          count={counter}
          state={IStateBtn.danger}
          onPress={onChangeCounter(-1)}
        />
        <Button
          text={'increment'}
          count={counter}
          state={IStateBtn.disabled}
          onPress={onChangeCounter(1)}
        />
      </View>

      <Header title={'Counter Secondary'} />
      <View style={styles.content}>
        <Button
          text={'decrement'}
          count={counter}
          type={IButtonTypes.secondary}
          onPress={onChangeCounter(-1)}
        />
        <Button
          text={'increment'}
          count={counter}
          type={IButtonTypes.secondary}
          state={IStateBtn.danger}
          onPress={onChangeCounter(1)}
        />
        <Button
          text={'decrement'}
          count={counter}
          type={IButtonTypes.secondary}
          state={IStateBtn.disabled}
          onPress={onChangeCounter(-1)}
        />
      </View>

      <Header title={'Counter Tertiary'} />
      <View style={styles.content}>
        <Button
          text={'increment'}
          count={counter}
          type={IButtonTypes.tertiary}
          onPress={onChangeCounter(1)}
        />
        <Button
          text={'decrement'}
          count={counter}
          type={IButtonTypes.tertiary}
          state={IStateBtn.danger}
          onPress={onChangeCounter(-1)}
        />
        <Button
          text={'increment'}
          count={counter}
          type={IButtonTypes.tertiary}
          state={IStateBtn.disabled}
          onPress={onChangeCounter(1)}
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
