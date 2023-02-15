import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
const sass = gulpSass(dartSass);

import cleancss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import gcmq  from 'gulp-group-css-media-queries';

export const scss = () => {
  return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev})
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'SCSS',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(app.plugins.replace(/@img\//g, '../images/'))
  
  .pipe(sass({
    outputStyle: 'expanded'
  }))
  .pipe(gcmq())
  .pipe(app.plugins.if(
    app.isBuild,
    autoprefixer({
    grid: true,
    overrideBrowserslist:["last 3 versions"],
    cascade: true
  })))
  .pipe(app.gulp.dest(app.path.build.css))
  .pipe(app.plugins.if(
    app.isBuild,
    cleancss()
    ))
  .pipe(rename({suffix: '.min'}))
  .pipe(app.gulp.dest(app.path.build.css,{sourcemaps: app.isDev}))
  .pipe(app.plugins.browsersync.stream());
}