const gulp = require("gulp");
const babel = require("gulp-babel");
const minify = require("gulp-minify");

gulp.task('default', () => {
    gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest("./src/style"))

    gulp.src('./src/*.css')
        .pipe(gulp.dest("./build/style"))
    
    gulp.src('./src/index.html')
        .pipe(gulp.dest("./build"))    

    // gulp.src('./src/scripts/*.js')
    //     .pipe(babel({
    //         presets: ['@babel/env']
    //     }))
    //     .pipe(minify())
    //     .pipe(gulp.dest("./build"))
    
})