module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'boundle.js'
    }, 
    module: {
        rules: [
            {
                test: /.js$/,
                use: ['babel-loader']
            }     
        ],
    }
}