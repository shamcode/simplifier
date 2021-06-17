import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import cleaner from 'rollup-plugin-cleaner';
import scss from 'rollup-plugin-scss';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';
import nodeResolveWithMacro from 'rollup-plugin-node-resolve-with-sham-ui-macro';
import shamUICompiler from 'rollup-plugin-sham-ui-templates';

const prod = !process.env.ROLLUP_WATCH;
const dev = !prod;

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        cleaner( {
            targets: [
                'dist'
            ]
        } ),
        replace( {
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV )
        } ),
        shamUICompiler( {
            extensions: [ '.sht' ],
            compilerOptions: {
                removeDataTest: false
            }
        } ),
        shamUICompiler( {
            extensions: [ '.sfc' ],
            compilerOptions: {
                asModule: false,
                asSingleFileComponent: true,
                removeDataTest: false
            }
        } ),
        nodeResolveWithMacro( {
            browser: true
        } ),
        commonjs(),
        babel( {
            extensions: [ '.js', '.sht', '.sfc' ],
            exclude: [ 'node_modules/**' ],
            babelHelpers: 'bundled'
        } ),
        scss( {
            failOnError: true,
            output: 'dist/bundle.css',
            watch: 'src/styles',
            sass: require( 'sass' )
        } ),
        dev && serve( {
            port: 3000,
            contentBase: __dirname
        } ),
        dev && livereload( {
            watch: 'dist'
        } ),
        prod && terser()
    ]
};


