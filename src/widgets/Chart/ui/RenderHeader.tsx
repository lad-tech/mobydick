import Animated, {useAnimatedProps} from 'react-native-reanimated';
import {TextInput} from 'react-native';

import {IRenderHeader, Typography, View} from 'shared/ui';

interface IRenderHeaderProps {
  header: Parameters<IRenderHeader>[number];
}

export const AnimatedText = Animated.createAnimatedComponent(TextInput);
Animated.addWhitelistedNativeProps({text: true});

const RenderHeader = ({header}: IRenderHeaderProps) => {
  const animatedPropsPeriod = useAnimatedProps(() => {
    return {
      text: header.selectedPeriodName.value,
      defaultValue: header.selectedPeriodName.value,
    };
  });

  const animatedPropsRecord = useAnimatedProps(() => {
    const lastRecord = header.selectedValues.value[0]?.y.toString() ?? '';

    return {
      text: lastRecord,
      defaultValue: lastRecord,
    };
  });

  return (
    <View>
      <AnimatedText
        animatedProps={animatedPropsPeriod}
        editable={false}
        underlineColorAndroid="transparent"
      />
      <Typography>Last record</Typography>
      <AnimatedText
        animatedProps={animatedPropsRecord}
        editable={false}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default RenderHeader;
