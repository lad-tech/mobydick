import {createStyles, InputField, useStyles, View} from '@shared/ui';

export const Inputs = () => {
  const [styles] = useStyles(style);
  return (
    <View style={styles.container}>
      {new Array(20).fill(0).map((_value, index) => (
        <InputField
          key={index}
          title={`Input title ${index}`}
          subtitle={`Input subtitle ${index}`}
        />
      ))}
    </View>
  );
};

const style = createStyles(({spaces}) => ({
  container: {
    gap: spaces.Space8,
  },
}));
