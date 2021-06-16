module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
    assetsSubDirectory:'dist',
    assetsPublicPath: '/week6-vue-cli/dist/'
}