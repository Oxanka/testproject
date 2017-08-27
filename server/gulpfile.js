var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-minify-css'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;
// Default task
gulp.task('default',  function() {
    gulp.run();
});

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        css: 'public/'
    },
    src: { //Пути откуда брать исходники
        style: 'public/less/app.less'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        style: 'public/less/*.less'
    }
};

gulp.task('style:build', function (done) {
    gulp.src(path.src.style) //Выберем наш main.scss
        .pipe(sourcemaps.init())
        .pipe(less()) //Скомпилируем
        .pipe(cssmin()) //Сожмем
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) //И в build
        //.pipe(reload({stream: true}));
        done();
});

gulp.task('watch', function(){
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
});