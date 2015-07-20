# suncalc-cli 

[![NPM version][npm-image]][npm-url] 
[![Build Status][travis-image]][travis-url] 
[![Dependency Status][daviddm-image]][daviddm-url] 
[![Coverage percentage][coveralls-image]][coveralls-url]


Command line tool based on [Suncalc](https://github.com/mourner/suncalc) to be used 
from command line.

## Installation

Install as a global CLI tool

```sh
$ npm install -g suncalc-cli
```

## Usage

### Get the azimuth of the sun on a given location
```sh
suncalc-cli azimuth [-l <latitude>,<longtitude>] [-d "<date>"] [-a]
```
Date option is optional, defaults to the current datetime.
Use -a to get the altitude at the given moment.

## License

Apache-2.0 © [Tim Klingeleers](http://tim.klingeleers.be)


[npm-image]: https://badge.fury.io/js/suncalc-cli.svg
[npm-url]: https://npmjs.org/package/suncalc-cli
[travis-image]: https://travis-ci.org/Mardaneus86/suncalc-cli.svg?branch=master
[travis-url]: https://travis-ci.org/Mardaneus86/suncalc-cli
[daviddm-image]: https://david-dm.org/Mardaneus86/suncalc-cli.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Mardaneus86/suncalc-cli
[coveralls-image]: https://coveralls.io/repos/Mardaneus86/suncalc-cli/badge.svg
[coveralls-url]: https://coveralls.io/r/Mardaneus86/suncalc-cli
