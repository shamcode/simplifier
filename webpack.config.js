const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );

function createConfig( isProd ) {
    return {
        entry: [
            './src/main.js',
            './src/styles/main.scss'
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
            } ),
            new webpack.DefinePlugin( {
                PRODUCTION: JSON.stringify( isProd )
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
                test: /\.(woff2?|ttf|otf|eot|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'font',
                            publicPath: 'font'
                        }
                    }
                ]
            }, {
                test: /(\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                include: __dirname
            }, {
                test: /\.sht$/,
                loader: 'sham-ui-templates-loader?hot'
            }, {
                test: /\.sfc$/,
                use: [
                    { loader: 'babel-loader' },
                    {
                        loader: 'sham-ui-templates-loader?hot',
                        options: {
                            asModule: false,
                            asSingleFileComponent: true
                        }
                    }
                ]
            } ]
        }
    };
}

module.exports = ( env, argv ) => {
    const isDev = 'development' === argv.mode;
    const config = createConfig( !isDev );
    if ( isDev ) {
        config.devtool = 'cheap-module-eval-source-map';
        config.entry.push( 'webpack-hot-middleware/client' );
        config.plugins.push( new webpack.HotModuleReplacementPlugin() );
    } else {
        config.plugins.push(
            new OptimizeCssAssetsPlugin( {
                cssProcessor: require( 'cssnano' ),
                cssProcessorPluginOptions: {
                    preset: [ 'default', { discardComments: { removeAll: true } } ]
                },
                canPrint: true
            } )
        );
    }
    config.mode = argv.mode;
    return config;
};
