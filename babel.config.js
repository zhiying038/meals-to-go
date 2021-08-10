module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            root: "./",
            src: "./src",
            utils: "./src/utils",
            screens: "./src/screens",
            components: "./src/components",
          },
          extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
        },
      ],
    ],
  };
};
