var gulp = require('gulp');
var concat = require('gulp-concat');
var src = {};
var watch = false;
var $ = require('gulp-load-plugins')();
var DEST = './dist';                         // The build output folder
var compass = require('gulp-compass');

var browserify = require('gulp-browserify'), browserifyTransform = [[
    { 'es6': true, global: true },
    'reactify'
]];


gulp.task('browserify', function () {
    gulp.src('src/js/main.js')
        .pipe(browserify({transform: browserifyTransform}))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});

// Static files
gulp.task('assets', function () {
    src.assets = 'src/assets/**';
    return gulp.src(src.assets)
        .pipe($.changed(DEST + '/assets/'))
        .pipe(gulp.dest(DEST + '/assets/'))
        .pipe($.size({title: 'assets'}));
});

gulp.task('vendor', function () {
    src.vendor = 'src/plugins/**';
    return gulp.src(src.vendor)
        .pipe($.changed(DEST + '/plugins/'))
        .pipe(gulp.dest(DEST + '/plugins/'))
        .pipe($.size({title: 'plugins'}));
});


gulp.task('default', ['browserify', 'copy', 'assets', 'vendor']);

gulp.task('watch', function () {
    gulp.watch('src/**/*.*', ['default']);
});
