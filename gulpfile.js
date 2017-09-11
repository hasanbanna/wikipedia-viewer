// Include gulp
var gulp = require('gulp');
// inlcude concat plugin
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('scripts', function(){
    return gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});
var sass = require('gulp-ruby-sass');
gulp.task('sass', function(){
    return sass('src/scss/*.scss', {style: 'compressed'})
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/scss'));
});

gulp.task('watch', function(){
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/scss/*.scss', ['sass']);
});
gulp.task('default', ['scripts','sass','watch']);
