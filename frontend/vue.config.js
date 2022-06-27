const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      webSocketURL: 'wss://appli.docker.localhost/ws',
    },
    allowedHosts: "all"
  }
})
