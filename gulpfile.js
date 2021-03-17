"use strict";

const gulp = require("gulp");

const ejs = require("gulp-ejs");
const rename = require("gulp-rename");

function watch() {
  gulp.watch("./templates/**/*.ejs", buildTemplates);
}

function buildTemplates() {
  return gulp
    .src("./templates/*.ejs")
    .pipe(ejs())
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("."));
}

module.exports.watch = watch;
module.exports.buildTemplates = buildTemplates;
