module.exports = {
  expo: {
    name: 'mobydick',
    slug: 'mobydick',
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    version: require('./package.json').version,
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'mobydick',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#20242D',
    },
    ios: {
      config: {
        usesNonExemptEncryption: false,
      },
      supportsTablet: true,
      bundleIdentifier: 'com.mobydick',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.mobydick',
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-font',
        {
          fonts: [
            'node_modules/@lad-tech/mobydick-core/src/typography/assets/fonts/Inter.ttf',
            'node_modules/@lad-tech/mobydick-core/src/styles/icons/font/assets/fonts/Neotis.ttf',
          ],
        },
      ],
    ],
    experiments: {
      reactCompiler: false,
      typedRoutes: false,
    },
    extra: {
      router: {
        origin: false,
      },
    },
    owner: 'lad-tech',
    runtimeVersion: {
      policy: 'appVersion',
    },
  },
};
