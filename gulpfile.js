const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
    gulp.src('public/app/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('public/dist'));
});