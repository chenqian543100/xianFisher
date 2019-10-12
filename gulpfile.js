const gulp = require("gulp");
const sass = require("gulp-sass");
const  minfyCSS = require("gulp-minify-css");




gulp.task("watchall",async ()=>{
    gulp.watch("*.html",async ()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\xianFisher"))
    })
    gulp.watch("sass/**/*",async ()=>{
        gulp.src("sass/**/*")
        .pipe(sass())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\xianFisher\\css"))
    })
    gulp.watch("css/*.css",async ()=>{
        gulp.src("css/*.css")
        .pipe(minfyCSS())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\xianFisher\\css"))
    })
    gulp.watch("img/**/*",async ()=>{
        gulp.src("img/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\xianFisher\\img"))
    })
    gulp.watch("js/*.js",async ()=>{
        gulp.src("js/*.js")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\xianFisher\\js"))
    })
    gulp.watch("*.php",async ()=>{
        gulp.src("*.php")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\xianFisher"))
    })
})