  const postcssjitprops = require("postcss-jit-props");
  const OpenProps = require("open-props");


  module.exports = {
    plugins: [
      postcssjitprops(OpenProps),
      require('autoprefixer')
    ]
  };