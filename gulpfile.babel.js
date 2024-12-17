import { src, dest, watch, series, parallel } from 'gulp';
import yargs from 'yargs';
import compSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(compSass)
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import flatten from 'gulp-flatten';
import webpack from 'webpack-stream';
import del from 'del';
import named from 'vinyl-named';
const PRODUCTION = yargs.argv.prod;

var options = {};

// The root paths are used to construct all the other paths in this
// configuration.
options.rootPath = {
  projectAssets : __dirname + '/src/',
  themeAssets   : './themes/**/src/'
};

options.path = {
  sass : [
    options.rootPath.themeAssets + 'scss/**/*.scss',
    options.rootPath.projectAssets + 'scss/**/*.scss'
  ],
  js : [
    options.rootPath.themeAssets + 'js/**/*.js',
    options.rootPath.projectAssets + 'js/**/*.js'
  ]
};

export const styles = () => {
  console.log(options.path.sass)
  return src(options.path.sass)
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([ autoprefixer ])))
    .pipe(gulpif(PRODUCTION, cleanCss({compatibility:'ie8'})))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(flatten())
    .pipe(dest('./static/css'));
}

export const images = () => {
  return src('src/img/**/*.{jpg,jpeg,png,svg,gif}')
    //.pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(dest('static/img'));
}

export const fonts = () => {
  return src(options.path + '/static/fonts/**/*.{ttf,svg,woff,woff2}')
    .pipe(dest('./static/fonts'));
}

export const scripts = () => {
  return src(options.path.js)
  .pipe(named())
  .pipe(webpack({
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ["@babel/plugin-transform-spread"]
            }
          }
        }
      ]
    },
    mode: PRODUCTION ? 'production' : 'development',
    devtool: !PRODUCTION ? 'inline-source-map' : false,
    output: {
      filename: '[name].js'
    },
  }))
  .pipe(dest('./static/js'));
}

export const clean = () => del(['public']);

export const watchForChanges = () => {
  watch(options.path.sass, styles);
  watch('src/img/**/*.{jpg,jpeg,png,svg,gif}', images);
  watch(options.path.js, scripts);
}

export const dev = series(parallel(styles, images, scripts, fonts), watchForChanges)
export const build = series(clean, parallel(styles, images, scripts, fonts))
export default dev;
