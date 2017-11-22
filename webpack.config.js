const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const env = process.env.WEBPACK_ENV;
const plugins = [];
const entry = [
    './src/main.js',
    './src/styles/main.scss',
];

if ( env === 'build' ) {
    plugins.push( new webpack.optimize.UglifyJsPlugin( { minimize: true } ) );
} else {
    entry.push( 'webpack-hot-middleware/client' );
    plugins.push( new webpack.HotModuleReplacementPlugin() );
}

plugins.push(
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin( {
        allChunks: true,
        filename: 'bundle.css'
    } )
);

module.exports = {
    entry,
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: plugins,
    module: {
        loaders: [ {
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
            exclude: /(node_modules)/,
            include: __dirname
        }, {
            test: /\.sht/,
            loader: 'sham-ui-templates-loader?hot'
        } ]
    }
};
