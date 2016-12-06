const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const minify = require('gulp-minify');
const uglify = require('gulp-uglify');
const pump = require('pump');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

const compileJS = () => {
  pump([
      gulp.src('public/app/js/**/*.js'),  
      babel({ presets: ['es2015'] }),
      uglify(),
      gulp.dest('server/dist/js')
    ]);
};

const compileHTML = () => {
  gulp.src('public/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('server/dist/views'));
    
}

const compileCSS = () => {
  gulp.src('public/app/stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({}))
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