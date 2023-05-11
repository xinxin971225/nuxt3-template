module.exports = {
  //默认新建项目时是绝对路径针对当前ide的目录，如果在monorepo里会读取不到所以最好明确./src/**/*.{js,vue,ts}路径
  content: ["./src/**/*.{js,vue,ts}", "./nuxt.config.{js,ts}"],
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
};
