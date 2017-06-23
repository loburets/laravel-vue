const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .mix.webpackConfig({
        resolve: {
            modules: [
                path.resolve('./resources/assets/js'),
                path.resolve('./node_modules'),
            ]
        }
    })
    .sourceMaps()
    .sass('resources/assets/sass/app.scss', 'public/css')
    .mix.browserSync('pet.loc');
