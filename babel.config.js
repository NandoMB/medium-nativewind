module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel'
    ],
    plugins: [
	    // You can ignore this plugin if you decided to not support web version.
	    '@babel/plugin-proposal-export-namespace-from',
      // 🚨 Make sure to list react-native-reanimated/plugin last! 🚨
      'react-native-reanimated/plugin'
    ]
  };
};