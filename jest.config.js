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
    'transformIgnorePatterns': [
        'node_modules/(?!(jest-)?react-native|@react-native-community|@react-native|@react-navigation/.*)',
    ],
    'setupFilesAfterEnv': [
        '<rootDir>/__mocks__/globalMock.ts',
    ],
    'moduleNameMapper': {
        '\\.svg': '<rootDir>/__mocks__/svgMock.ts',
    },
    testResultsProcessor: 'jest-sonar-reporter',
};

