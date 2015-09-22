var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

// SASS
gulp.task('sass', function() {
    return sass('./css/**/*.scss', {style: 'expanded'})
	.on('error', sass.logError)
    .pipe(gulp.dest('css'));
});

//SASS Watch task
gulp.task('watch',function() {
    gulp.watch('./css/**/*.scss',['sass']);
});

//Default task
gulp.task('default', ['sass', 'watch']);
