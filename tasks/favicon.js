import gulp from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import filter from 'gulp-filter';
import favicons from 'gulp-favicons';

export default () => {
  return gulp
    .src(path.favicon.src, { sourcemaps: true })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Favicon',
          message: error.message,
        })),
      }),
    )
    .pipe(gulp.dest(path.favicon.dest))
    .pipe(favicons(app.favicons))
    .pipe(gulp.dest(path.favicon.dest))
    .pipe(filter(['favicon.ico', 'apple-touch-icon.png', 'manifest.json']))
    .pipe(gulp.dest(path.root));
};
