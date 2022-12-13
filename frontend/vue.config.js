const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      webSocketURL: 'wss://webserver.cesu.local/ws',
    },
    allowedHosts: "all"
  }
})
