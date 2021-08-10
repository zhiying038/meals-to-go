module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            root: ["./"],
            utils: ["./src/utils"],
            screens: ["./src/screens"],
            components: ["./src/components"],
            config: ["./src/config"],
            assets: ["./assets"],
          },
          extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
        },
      ],
    ],
  };
};
