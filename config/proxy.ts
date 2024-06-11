/**
 * @name 代理的配置
 * @doc https://umijs.org/docs/guides/proxy
 */
export default {
  '/spider/': {
    // target: 'http://43.140.221.180:8000', // 原始
    target: 'http://100.118.120.106:8082', // 胡雷
    changeOrigin: true,
    // pathRewrite: { '^/api': '' },
  },
}
