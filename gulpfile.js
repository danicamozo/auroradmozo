var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync').create();

function style() {

return gulp.src('resources/scss/*.scss')
.pipe(sass())
.pipe(gulp.dest('resources/css'))
.pipe(browserSync.stream())
}

function watch() {
browserSync.init({
server: {
baseDir: './'
}
});
gulp.watch('resources/scss/*.scss', style);
gulp.watch('app/*.html').on('change', browserSync.reload);
gulp.watch('resources/js/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;