module.exports = {
    'preset': 'react-native',
    'moduleFileExtensions': [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node',
    ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx?)$',
    "setupFiles": ["@shopify/react-native-skia/jestSetup.js"],
    'transformIgnorePatterns': [
        'node_modules/(?!(jest-)?react-native|@react-native-community|@react-native|@react-navigation/.*|@shopify/react-native-skia)',
    ],
    'setupFilesAfterEnv': [
        '<rootDir>/__mocks__/globalMock.ts',
    ],
    'moduleNameMapper': {
        '\\.svg': '<rootDir>/__mocks__/svgMock.ts',
    },
    testResultsProcessor: 'jest-sonar-reporter',
};

