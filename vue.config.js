const { defineConfig } = require('@vue/cli-service')
/*module.exports = defineConfig({
  transpileDependencies: true
}) */
module.exports = {
  publicPath: '/', // Ensure correct paths for Firebase Hosting
  outputDir: 'dist', // Default build folder
};