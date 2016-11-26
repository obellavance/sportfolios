const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
    console.log('hey');
    gulp.src('public/app/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('server/dist/js'));
});