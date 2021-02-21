import gulp from 'gulp'
import bSync from 'browser-sync'
import del from 'del'
import rename from 'gulp-rename'
import concat from 'gulp-concat'
import rigger from 'gulp-rigger'
import babel from 'gulp-babel'
import pug from 'gulp-pug'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import sourcemaps from 'gulp-sourcemaps'
import csso from 'gulp-csso'

const browserSync = bSync.create()
const paths = {
  dist: "./docs",
  assets: "./docs/assets",
  src: "./src"
}


// CLEAN
export const cleanTask = () => {
  return del(paths.dist + '/')
}

// SERVER
export const serverTask = () => {
  return browserSync.init({
    server: paths.dist,
    https: false,
    open: false
  });
}

// ROOT
export const rootTask = () => {
  return gulp.src(paths.src + "/root/**/*.*")
    .pipe(gulp.dest(paths.dist));
}

// FONTS
export const fontsTask = () => {
  return gulp.src(paths.src + '/fonts/**/*.*')
    .pipe(gulp.dest(paths.assets + '/fonts/'))
}

// VIDEO
export const videoTask = () => {
  return gulp.src(paths.src + '/video/*.{mp4,webm}')
    .pipe(gulp.dest(paths.assets + '/video/'))
}

// IMAGE
export const imageTask = () => {
  return gulp.src(paths.src + '/img/**/*.{png,svg,jpg,jpeg,gif}')
    .pipe(gulp.dest(paths.assets + '/img/'))
}

// PUG
export const pugTask = () => {
  return gulp.src(paths.src + '/pages/**/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(paths.dist))
    .on('end', browserSync.reload)
}

// STYLE
export const styleTask_Lib = () => {
  return gulp.src(paths.src + '/libs/**/*.css')
    .pipe(concat('libs.min.css'))
    .pipe(csso())
    .pipe(gulp.dest(paths.assets + '/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
}
export const styleTask_Dev = () => {
  return gulp.src(paths.src + '/styles/main.sass')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist:  ['last 10 versions']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.assets + '/css/'))
    .pipe(browserSync.reload({
      stream: true
    }));
}

// SCRIPT
export const scriptTask_Lib = () => {
  return gulp.src(paths.src + '/libs/**/*.js')
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest(paths.assets + '/js/'))
    .pipe(browserSync.reload({
      stream: true
    }));
}
export const scriptTask_Dev = () => {
  return gulp.src(paths.src + '/components/index.js', { sourcemaps: true })
    .pipe(rigger())
    .pipe(babel())
    .pipe(rename('main.js'))
    .pipe(gulp.dest(paths.assets + '/js/'))
    .pipe(browserSync.reload({
      stream: true
    }));
}
export const scriptTask_Json = () => {
  return gulp.src(paths.src + '/json/*.json')
    .pipe(gulp.dest(paths.assets + '/js/'))
    .pipe(browserSync.reload({
      stream: true
    }));
}

// WATCH
export const watchTask = () => {
  gulp.watch(paths.src + "/root/**/*.*", rootTask);
  gulp.watch(paths.src + "/fonts/**/*.*", fontsTask);
  gulp.watch(paths.src + "/video/*.{mp4,webm}", videoTask);
  gulp.watch(paths.src + "/img/**/*.{png,svg,jpg,jpeg,gif}", imageTask);
  gulp.watch(
    [
      paths.src + "/pages/**/*.pug",
      paths.src + "/layouts/**/*.pug",
      paths.src + "/components/**/*.pug",
    ],
    pugTask
  );
  gulp.watch(paths.src + "/libs/**/*.css", styleTask_Lib);
  gulp.watch(
    [
      paths.src + "/styles/**/*.sass",
      paths.src + "/components/**/*.sass"
    ], styleTask_Dev
  );
  gulp.watch(paths.src + "/libs/**/*.js", scriptTask_Lib);
  gulp.watch(paths.src + "/js/*.json", scriptTask_Json);
  gulp.watch(paths.src + "/components/**/*.js", scriptTask_Dev);
}

//DEV
export const devTask = gulp.series(
  cleanTask,
  gulp.parallel(
    rootTask,
    fontsTask,
    videoTask,
    imageTask,
    pugTask,
    styleTask_Lib,
    styleTask_Dev,
    scriptTask_Lib,
    scriptTask_Json,
    scriptTask_Dev
  )
)

export default gulp.series(
  devTask,
  gulp.parallel(
    watchTask,
    serverTask
  )
)
