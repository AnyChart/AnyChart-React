var browserify = require('browserify');
var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');

gulp.task('make', function() {
  return gulp.src('./src/anychart-react.jsx')
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(uglify())
    .pipe(rename('anychart-react.min.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['make']);

var pipeline = function(name) {
  browserify({
    entries: ['./examples/src/' + name + '.js'],
    transform: [
      ["babelify", {"presets": ["es2015", "react"]}]
    ]
  })
    .bundle()
    .pipe(source(name + '.min.js'))
    .pipe(gulp.dest('./examples/dist/' + name))
};

gulp.task('complex', function() {
  pipeline('complex')
});

gulp.task('map', function() {
  pipeline('map')
});

gulp.task('simple', function() {
  pipeline('simple')
});

gulp.task('stage', function() {
  pipeline('stage')
});

gulp.task('stock', function() {
  pipeline('stock')
});

gulp.task('streaming', function() {
  pipeline('streaming')
});

gulp.task('tabs', function() {
  pipeline('tabs')
});

var allExamples = ['complex', 'map', 'simple', 'stage', 'stock', 'streaming', 'tabs'];
gulp.task('examples', allExamples);