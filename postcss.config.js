module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 3, // 可根据需求调整stage值
      browsers: 'last 2 versions', // 可指定需要支持的浏览器
    }),
  ],
};
