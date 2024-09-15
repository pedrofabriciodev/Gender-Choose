module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@/*': '.src/assets',  // Defina aqui o alias conforme a estrutura de diretórios
          },
        },
      ],
    ],
  };
};
