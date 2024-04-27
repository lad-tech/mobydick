const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */


const config = (async () => {
  const {
    resolver: {sourceExts, assetExts}
  } = await getDefaultConfig(__dirname)
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false
        }
      }),
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    }
  }
})()




module.exports = mergeConfig(getDefaultConfig(__dirname), config);
