#!/usr/bin/env node

var argv = process.argv.slice(2, process.argv.length)

console.log(argv + '\n');

console.log('start\n');

var gulp = require('./task')

gulp.start(argv, function(){
  console.log('end');
})