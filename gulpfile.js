const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const minify = require('gulp-minify');
const uglify = require('gulp-uglify');
const pump = require('pump');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

const conf = require('./conf.js');

const compileJS = () => {
  
  if (conf.stage === 'dev') {
    console.log('Compiling JS');
    gulp.src('public/app/**/*.js')
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(gulp.dest('server/dist'));
  } else if (conf.stage === 'prod') {
    pump([
      gulp.src('public/app/**/*.js'),  
      babel({ presets: ['es2015'] }),
      uglify(),
      gulp.dest('server/dist')
    ]);
  }
};

const compileHTML = () => {
  if (conf.stage === 'dev') {
    console.log('Compiling HTML');
  }
  
  gulp.src('public/app/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('server/dist'));
}

const compileCSS = () => {
  if (conf.stage === 'dev') { 
    console.log('Compiling CSS');
  }
  
  gulp.src('public/app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({}))
    .pipe(gulp.dest('server/dist'));
}

const compileAll = () => {
  compileJS();
  compileHTML();
  compileCSS();
}

gulp.task('default', () => {
  compileAll();
});

gulp.watch(['public/app/**/*.js'], (e) => {
  compileJS();
});

gulp.watch(['public/app/**/*.html'], (e) => {
  compileHTML();
})

gulp.watch(['public/app/**/*.scss'], (e) => {
  compileCSS();
});