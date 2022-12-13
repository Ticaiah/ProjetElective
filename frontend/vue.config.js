const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      webSocketURL: 'wss://10.0.0.23/ws',
    },
    allowedHosts: "all"
  }
})
