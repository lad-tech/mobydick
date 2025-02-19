module.exports = {
    "preset": "jest-expo",
    'moduleFileExtensions': [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node',
    ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx?)$',
    "setupFiles": ["@shopify/react-native-skia/jestSetup.js", "./node_modules/react-native-gesture-handler/jestSetup.js"],
    "transformIgnorePatterns": [
        "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)"
    ],
    'setupFilesAfterEnv': [
        '<rootDir>/__mocks__/globalMock.ts',

    ],
    'moduleNameMapper': {
        '\\.svg': '<rootDir>/__mocks__/svgMock.ts',
    },
    testResultsProcessor: 'jest-sonar-reporter',
};

