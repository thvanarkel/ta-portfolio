import { src, dest } from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
const PRODUCTION = yargs.argv.prod;

var options = {};

// The root paths are used to construct all the other paths in this
// configuration.
options.rootPath = {
  projectAssets : '../../assets/',
  themeAssets   : __dirname + '/assets/'
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
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(PRODUCTION, cleanCss({compatibility:'ie8'})))
    .pipe(dest('./static/css'));
}

export const hello = (cb) => {
  console.log("Hello");
  cb();
}

export default styles
