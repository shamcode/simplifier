var fs = require( 'fs' );
var webpack = require( 'webpack' );
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

var env = process.env.WEBPACK_ENV;
var plugins = [];

if ( env === 'build' ) {
    plugins.push( new UglifyJsPlugin( { minimize: true } ) );
}

plugins.push(
    new ExtractTextPlugin( {
        allChunks: true,
        filename: 'bundle.css'
    } )
);

var config = {
    entry: {
        bundle: __dirname + '/src/main.js',
        styles: __dirname + '/src/styles/main.scss'
    },
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract( {
                   fallback: 'style-loader',
                   use: 'css-loader!sass-loader'
                } )
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract( {
                    fallback: 'style-loader',
                    use: 'css-loader'
                } )
            }, {
                test: /(\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.css' ]
    },
    plugins: plugins
};

module.exports = config;