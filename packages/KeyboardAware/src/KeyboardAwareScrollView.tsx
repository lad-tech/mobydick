import {
  Animated,
  Keyboard,
  Platform,
  ScrollView,
  type ScrollViewProps,
  StatusBar,
  TextInput,
  View,
} from 'react-native';
import {ReactElement, useEffect, useRef} from 'react';

const androidStatusBarOffset = StatusBar.currentHeight ?? 0;

const KeyboardAwareScrollView = ({
  children,
  BottomComponent,
  ...rest
}: ScrollViewProps & {BottomComponent?: ReactElement}) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const scrollPositionRef = useRef<number>(0);
  const keyboardHeightRef = useRef(new Animated.Value(0)).current;

  const bottomRef = useRef<View>(null);

  useEffect(() => {
    const calculateAndScroll = ({
      keyboardY,
      bottomHeight,
    }: {
      keyboardY: number;
      bottomHeight: number;
    }) => {
      const currentlyFocusedInput = TextInput.State.currentlyFocusedInput();
      currentlyFocusedInput?.measureInWindow((_x, y, _width, height) => {
        const endOfInputY = y + height + androidStatusBarOffset;
        const deltaToScroll = endOfInputY - keyboardY;
        const additionalScroll = 30;

        const scrollPositionTarget =
          scrollPositionRef.current +
          deltaToScroll +
          additionalScroll +
          bottomHeight;

        scrollViewRef.current?.scrollTo({
          y: scrollPositionTarget,
          animated: true,
        });
      });
    };

    const didShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      frames => {
        const keyboardY = frames.endCoordinates.screenY;
        const duration = frames.duration;

        Animated.timing(keyboardHeightRef, {
          toValue: frames.endCoordinates.height,
          duration,
          useNativeDriver: Platform.OS !== 'ios',
        }).start(() => {
          bottomRef.current?.measureInWindow(
            (_BottomX, _BottomY, _BottomWidth, bottomHeight) => {
              calculateAndScroll({
                keyboardY,
                bottomHeight: bottomHeight ?? 0,
              });
            },
          );
        });
      },
    );

    const didHideListener = Keyboard.addListener('keyboardWillHide', frames => {
      const duration = frames.duration;
      Animated.timing(keyboardHeightRef, {
        toValue: 0,
        duration,
        useNativeDriver: Platform.OS !== 'ios',
      }).start();
    });

    return () => {
      didShowListener.remove();
      didHideListener.remove();
    };
  }, []);

  return (
    <>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={event => {
          scrollPositionRef.current = event.nativeEvent.contentOffset.y;
        }}
        {...rest}>
        {children}
      </Animated.ScrollView>
      <View ref={bottomRef}>{BottomComponent}</View>
      <Animated.View
        style={[
          Platform.OS === 'ios'
            ? {height: keyboardHeightRef}
            : {
                transform: [{translateY: keyboardHeightRef}],
              },
        ]}
      />
    </>
  );
};

export default KeyboardAwareScrollView;
