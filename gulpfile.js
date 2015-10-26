var gulp = require('gulp');
var gutil = require('gulp-util');
var markdown = require('gulp-markdown-to-json');

gulp.task('markdown', function(){
  gulp.src('./content/**/*.md')
    .pipe(gutil.buffer())
    .pipe(markdown('blog.json'))
    .pipe(gulp.dest('.'))
});