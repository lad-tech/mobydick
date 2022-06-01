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
