module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
      'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        "root": ["./src"],
        "extensions": [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json"
        ],
        "alias": {
          "@shared": "./src/shared",
          "@entities": "./src/entities",
          "@features": "./src/features",
          "@widgets": "./src/widgets",
          "@pages": "./src/pages",
          "@processes": "./src/processes",
          "@app": "./src/app",
        }
      },
    ],
  ]
};
