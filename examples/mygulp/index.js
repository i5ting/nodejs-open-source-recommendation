#!/usr/bin/env node

var argv = process.argv;
argv.shift();
argv.shift();

console.log(argv + '\n');

console.log('start\n');

var gulp = require('./task')

gulp.start(argv, function(){
  console.log('end');
})