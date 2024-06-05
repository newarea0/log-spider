/**
 * @name 代理的配置
 * @doc https://umijs.org/docs/guides/proxy
 */
export default {
  '/api/': {
    target: 'http://43.140.221.180:8000',
    changeOrigin: true,
    // pathRewrite: { '^/api': '' },
  },
}
