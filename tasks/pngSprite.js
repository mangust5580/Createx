import gulp from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';

import spritesmith from 'gulp.spritesmith';

export default () => {
  return gulp
    .src(path.pngSprite.src)
    .pipe(spritesmith(app.pngSprite))
    .pipe(gulp.dest(path.pngSprite.dest));
};



gulp.task('sprite', function () {
  var spriteData = gulp.src('images/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('path/to/output/'));
});