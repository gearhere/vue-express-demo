module.exports = {
  devServer: {
      proxy: { // set up a proxy
          '/api': {
              target: 'http://127.0.0.1:8888', // the requested target server interface
              changeOrigin: true, // a virtual server is created locally, which sends the requested data and receives the requested data at the same time, so that there is no cross-domain interaction between the server and the server
              pathRewrite: { // rewrite request
                  '^/api': '/api' // replace the request address in target, i.e. just write /api when requesting this address http://127.0.0.1:8888/XXXXX
              }
          }
      }
  }
}