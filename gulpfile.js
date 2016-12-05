const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
  gulp.src('public/app/js/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('server/dist/js'));
});

gulp.watch(['public/app/js/**/*.js'], (e) => {
  gulp.src('public/app/js/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('server/dist/js'));
});

gulp.watch(['public/app/views/**/*.html'], (e) => {
  gulp.src('public/app/views/**/*.html')
    .pipe(gulp.dest('server/dist/views'));
})