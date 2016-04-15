#!/usr/bin/env node

/* global process */

'use strict';

var program = require('commander');
var chalk = require('chalk');
var SunCalc = require('suncalc');

program
  .version('0.0.1');

program
  .description('Get the suncalc values for a given location')
  .option("-v, --value [value]", "One of azimuth|altitude|sunrise|sunset (defaults to azimuth)")
  .option("-d, --date [date]", "Date (defaults to current date)")
  .option("-l, --location [latitude,longtitude]", "Location")
  .parse(process.argv);

if (!program.value && !program.date && !program.location) {
  program.help();
}

var date;
var latitude;
var longtitude;
var value = program.value;

if (program.date === undefined) {
  date = new Date();
} else if (program.date === "tomorrow") {
  date = new Date().getTime() + 24 * 60 * 60 * 1000;
} else {
  date = Date.parse(program.date);
}

if (program.location === undefined) {
  console.log(chalk.red('Error: Location must be defined'));
  process.exit(1);
} else {
  var location = program.location.split(',');
  latitude = location[0];
  longtitude = location[1];
}

if (value === undefined) {
  value = "azimuth"
}

var position = SunCalc.getPosition(date, latitude, longtitude);
var times = SunCalc.getTimes(date, latitude, longtitude);
switch (program.value) {
  case "azimuth":
    console.log(position.azimuth * 180 / Math.PI);
    break;
  case "altitude":
    console.log(position.altitude);
    break;
  case "sunrise":
    console.log(times.sunrise);
    break;
  case "sunset":
    console.log(times.sunset);
    break;
  default:
    console.log(chalk.red('Error: Location must be defined'));
    process.exit(1);
}


