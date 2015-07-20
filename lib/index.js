#!/usr/bin/env node

/* global process */

'use strict';

var program = require('commander');
var chalk = require('chalk');
var SunCalc = require('suncalc');

program
  .version('0.0.1');

program
  .command('azimuth')
  .description('Gets the azimuth of the sun for a given location')
  .option("-d, --date [date]", "Date (defaults to current date)")
  .option("-l, --location [latitude,longtitude]", "Location")
  .option("-a, --altitude", "Get altitude")
  .action(function (options) {
    var date;
    var latitude;
    var longtitude;
    if (options.date === undefined) {
      date = new Date();
    } else {
      date = Date.parse(options.date);
    }
    
    if (options.location === undefined) {
      console.log(chalk.red('Error: Location must be defined'));
      process.exit(1);
    } else {
      var location = options.location.split(',');
      latitude = location[0];
      longtitude = location[1];
    }
    
    var position = SunCalc.getPosition(date, latitude, longtitude);
    if (options.altitude) {
      console.log(position.altitude);
    } else {
      console.log(position.azimuth * 180 / Math.PI);
    }
  });

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
