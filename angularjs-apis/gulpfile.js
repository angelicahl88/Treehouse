'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    glob = require('glob');


gulp.task('browserify', function() {
    var files = glob.sync('js/*.js');
    return browserify({entries: files}).bundle()
       .pipe(source('bundle.js'))
       .pipe(gulp.dest('browserify'));    
});

gulp.task('watchFiles', function() {
    gulp.watch('js/*.js', ['browserify']); 
});

gulp.task('serve', ['watchFiles']);