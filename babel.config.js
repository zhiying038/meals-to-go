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
            screens: ["./src/screens"],
            components: ["./src/components"],
            config: ["./src/config"],
            assets: ["./src/assets"],
            navigation: ["./src/navigation"],
            services: ["./src/services"],
            contexts: ["./src/contexts"],
            queries: ["./src/queries"],
            animations: ["./src/animations"],
          },
          extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
        },
      ],
    ],
  };
};
