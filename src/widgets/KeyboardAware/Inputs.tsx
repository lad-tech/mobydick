import {InputField, View} from 'shared/ui';

export const Inputs = () => {
  return (
    <View>
      {new Array(20).fill(0).map((_value, index) => (
        <InputField key={index} title={`Input ${index}`} />
      ))}
    </View>
  );
};
