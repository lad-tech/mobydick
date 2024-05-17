"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = require("react");
const androidStatusBarOffset = react_native_1.StatusBar.currentHeight ?? 0;
const KeyboardAwareScrollView = ({ children, BottomComponent, ...rest }) => {
    const scrollViewRef = (0, react_1.useRef)(null);
    const scrollPositionRef = (0, react_1.useRef)(0);
    const keyboardHeightRef = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    const bottomRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const calculateAndScroll = ({ keyboardY, bottomHeight, }) => {
            const currentlyFocusedInput = react_native_1.TextInput.State.currentlyFocusedInput();
            currentlyFocusedInput?.measureInWindow((_x, y, _width, height) => {
                const endOfInputY = y + height + androidStatusBarOffset;
                const deltaToScroll = endOfInputY - keyboardY;
                const additionalScroll = 30;
                const scrollPositionTarget = scrollPositionRef.current +
                    deltaToScroll +
                    additionalScroll +
                    bottomHeight;
                scrollViewRef.current?.scrollTo({
                    y: scrollPositionTarget,
                    animated: true,
                });
            });
        };
        const didShowListener = react_native_1.Keyboard.addListener(react_native_1.Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow', frames => {
            const keyboardY = frames.endCoordinates.screenY;
            const duration = frames.duration;
            react_native_1.Animated.timing(keyboardHeightRef, {
                toValue: frames.endCoordinates.height,
                duration,
                useNativeDriver: react_native_1.Platform.OS !== 'ios',
            }).start(() => {
                bottomRef.current?.measureInWindow((_BottomX, _BottomY, _BottomWidth, bottomHeight) => {
                    calculateAndScroll({
                        keyboardY,
                        bottomHeight: bottomHeight ?? 0,
                    });
                });
            });
        });
        const didHideListener = react_native_1.Keyboard.addListener('keyboardWillHide', frames => {
            const duration = frames.duration;
            react_native_1.Animated.timing(keyboardHeightRef, {
                toValue: 0,
                duration,
                useNativeDriver: react_native_1.Platform.OS !== 'ios',
            }).start();
        });
        return () => {
            didShowListener.remove();
            didHideListener.remove();
        };
    }, []);
    return (<>
      <react_native_1.Animated.ScrollView ref={scrollViewRef} onScroll={event => {
            scrollPositionRef.current = event.nativeEvent.contentOffset.y;
        }} {...rest}>
        {children}
      </react_native_1.Animated.ScrollView>
      <react_native_1.View ref={bottomRef}>{BottomComponent}</react_native_1.View>
      <react_native_1.Animated.View style={[
            react_native_1.Platform.OS === 'ios'
                ? { height: keyboardHeightRef }
                : {
                    transform: [{ translateY: keyboardHeightRef }],
                },
        ]}/>
    </>);
};
exports.default = KeyboardAwareScrollView;
