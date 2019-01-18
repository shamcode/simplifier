const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const config = {
    entry: [
        './src/main.js',
        './src/styles/main.scss',
    ],
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin( {
            allChunks: true,
            filename: 'bundle.css'
        } )
    ],
    module: {
        rules: [ {
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
            test: /\.sht$/,
            loader: 'sham-ui-templates-loader?hot'
        } ]
    }
};

module.exports = ( env, argv ) => {
    if ( 'development' === argv.mode ) {
        config.devtool = 'cheap-module-eval-source-map';
        config.entry.push( 'webpack-hot-middleware/client' );
        config.plugins.push( new webpack.HotModuleReplacementPlugin() );
    }
    config.mode = argv.mode;
    return config;
};
