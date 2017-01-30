var gulp = require('gulp');
var bookmarklet = require('gulp-bookmarklet');
 
gulp.task('bookmarklet', function() {
    return gulp.src('src/*.js')
        .pipe(bookmarklet())
        .pipe(gulp.dest('min.js'));
});

gulp.task('default', [ 'bookmarklet' ]);