var browserify = require('browserify');
var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
process.env.NODE_ENV = 'production';

gulp.task('prod', function () {
  return gulp
    .src('./src/anychart-react.jsx')
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename('anychart-react.min.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('dev', function () {
  return gulp
    .src('./src/anychart-react.jsx')
    .pipe(babel())
    .pipe(rename('anychart-react.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', gulp.parallel(['dev', 'prod']));

/*
 * Tasks for examples.
 */

const pipeline = function (name) {
  return browserify(`./examples/src/${name}.js`)
    .transform('babelify')
    .bundle()
    .pipe(source(name + '.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./examples/' + name));
};

gulp.task('chart_with_json', function () {
  return pipeline('chart_with_json');
});

gulp.task('multiseries_column_chart', function () {
  return pipeline('multiseries_column_chart');
});

gulp.task('charts_with_controls', function () {
  return pipeline('charts_with_controls');
});

gulp.task('choropleth_map', function () {
  return pipeline('choropleth_map');
});

gulp.task('data_streaming', function () {
  return pipeline('data_streaming');
});

gulp.task('simple_dashboard', function () {
  return pipeline('simple_dashboard');
});

gulp.task('stock', function () {
  return pipeline('stock');
});

gulp.task('tabs', function () {
  return pipeline('tabs');
});

gulp.task(
  'examples',
  gulp.series([
    'chart_with_json',
    'charts_with_controls',
    'choropleth_map',
    'data_streaming',
    'multiseries_column_chart',
    'simple_dashboard',
    'stock',
    'tabs',
  ])
);
