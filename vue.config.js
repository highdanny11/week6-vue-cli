module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
    assetsPublicPath: '/week6-vue-cli/dist/'
}