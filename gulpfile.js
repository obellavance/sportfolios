const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

const compileJS = () => {
  gulp.src('public/app/js/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('server/dist/js'));
};

const compileHTML = () => {
  gulp.src('public/app/views/**/*.html')
    .pipe(gulp.dest('server/dist/views'));
}

const compileCSS = () => {
  gulp.src('public/app/stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('server/dist/stylesheets'));
}

const compileAll = () => {
  compileJS();
  compileHTML();
  compileCSS();
}

gulp.task('default', () => {
  compileAll();
});

gulp.watch(['public/app/js/**/*.js'], (e) => {
  compileJS();
});

gulp.watch(['public/app/views/**/*.html'], (e) => {
  compileHTML();
})

gulp.watch(['public/app/stylesheets/**/*.scss'], (e) => {
  compileCSS();
});