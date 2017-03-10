var browserify = require('browserify');
var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
process.env.NODE_ENV = 'production';

gulp.task('prod', function() {
  return gulp.src('./src/anychart-react.jsx')
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(uglify())
    .pipe(rename('anychart-react.min.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('dev', function() {
  return gulp.src('./src/anychart-react.jsx')
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(rename('anychart-react.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['dev', 'prod']);

/*
 * Tasks for examples.
 */

var pipeline = function(name) {
  browserify({
    entries: ['./examples/src/' + name + '.js'],
    transform: [
      ["babelify", {"presets": ["es2015", "react"]}]
    ]
  })
    .bundle()
    .pipe(source(name + '.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./examples/' + name))
};

gulp.task('chart_with_json', function() {
  pipeline('chart_with_json')
});

gulp.task('multiseries_column_chart', function() {
  pipeline('multiseries_column_chart')
});

gulp.task('charts_with_controls', function() {
  pipeline('charts_with_controls')
});

gulp.task('choropleth_map', function() {
  pipeline('choropleth_map')
});

gulp.task('data_streaming', function() {
  pipeline('data_streaming')
});

gulp.task('simple_dashboard', function() {
  pipeline('simple_dashboard')
});

gulp.task('stock', function() {
  pipeline('stock')
});

gulp.task('tabs', function() {
  pipeline('tabs')
});

var allExamples = ['chart_with_json', 'charts_with_controls', 'choropleth_map', 'data_streaming', 'multiseries_column_chart', 'simple_dashboard', 'stock', 'tabs'];
gulp.task('examples', allExamples);