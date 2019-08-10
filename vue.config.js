module.exports = {
    devServer: {
        port: 4200,
        proxy: {
            '^/stocks': {
                target: 'http://10.2.2.198:8080',
                ws: true,
                changeOrigin: true
            }
        }
    }
}