jest.mock('global', () => ({
  ...global,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  WebSocket: function WebSocket() {},
}));

// RN do Object.freeze for Style in __DEV__
// https://github.com/facebook/react-native/commit/a8e3c7f5780516eb0297830632862484ad032c10#r74968198
// And I don't know why
jest.mock('react-native/Libraries/StyleSheet/StyleSheet.js', () => {
  const real = jest.requireActual(
    'react-native/Libraries/StyleSheet/StyleSheet.js',
  );
  return {
    ...real,
    create: (obj: unknown) => obj,
  };
});

// Somehow Platform.isTesting === undefined when running in jest:/
jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const real = jest.requireActual('react-native/Libraries/Utilities/Platform');
  return {
    ...real,
    isTesting: true,
  };
});

// we don't need logs in test's scripts
jest.mock('../scripts/utils/logger'); // or use require

jest.mock('react-native/Libraries/Utilities/BackHandler', () => {
  return jest.requireActual(
    'react-native/Libraries/Utilities/__mocks__/BackHandler.js',
  );
});

jest.mock('react-native-safe-area-context', () => {
  return jest.requireActual('react-native-safe-area-context/jest/mock').default;
});

jest.mock('react-native/Libraries/Interaction/PanResponder', () => {
  const real = jest.requireActual(
    'react-native/Libraries/Interaction/PanResponder',
  );
  return {
    ...real,
    create: (config: any) => ({panHandlers: config}),
  };
});

jest.mock('react-native-calendars', () => {
  const real = jest.requireActual('react-native-calendars');

  real.Calendar.defaultProps = {
    initialDate: '8.01.2022',
  };
  return {
    ...real,
  };
});
