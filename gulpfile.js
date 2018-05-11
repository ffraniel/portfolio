const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify-es").default;
const imagemin = require('gulp-imagemin');

gulp.task('miniJSMain', function () {
    gulp.src("source/js/*.js")
        .pipe(uglify())
        .on('error', errorLog)
        .pipe(gulp.dest("public/js"))
})

gulp.task('miniCSSMain', function () {
    gulp.src("source/style/*.css")
        .pipe(cleanCSS())
        .on('error', errorLog)
        .pipe(gulp.dest("public/style"))
})

gulp.task('miniJSPortfolio', function () {
    gulp.src("source/portfolio/js/*.js")
        .pipe(uglify())
        .on('error', errorLog)
        .pipe(gulp.dest("public/portfolio/js"))
})

gulp.task('miniCSSPortfolio', function () {
    gulp.src("source/portfolio/style/*.css")
        .pipe(cleanCSS())
        .on('error', errorLog)
        .pipe(gulp.dest("public/portfolio/style"))
})

gulp.task('default', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

gulp.task('HTMLAndImages', function () {
    gulp.src("source/*.html")
        .pipe(gulp.dest("public/"))
        .on('error', errorLog);

    gulp.src("source/portfolio/*.html")
        .pipe(gulp.dest("public/portfolio"))
        .on('error', errorLog);    

    gulp.src("source/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("public/images"))
        .on('error', errorLog);   
        
    gulp.src("source/portfolio/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("public/portfolio/images"))
        .on('error', errorLog);    

})

gulp.task('build', ['miniJSMain', 'miniCSSMain', 'miniJSPortfolio', 'miniCSSPortfolio', 'HTMLAndImages']);


function errorLog(error){
    console.error.bind(error);
    this.emit('end');
}