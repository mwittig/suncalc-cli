# suncalc-cli 


Command line tool based on [Suncalc](https://github.com/mourner/suncalc) to be used 
from command line.

This is a fork from Mardaneus86/suncalc-cli adding some features. No npm package is available for the 
fork as this time. You can install the fork via npm though if you git installed.

## Installation

Install as a global CLI tool (git must be installed!)

```sh
$ npm install -g mwittig/suncalc-cli
```

## Usage

### Options:

```sh
    Usage: suncalc-cli [options]    
    -h, --help                            output usage information
    -V, --version                         output the version number
    -v, --value [value]                   One of azimuth|altitude|sunrise|sunset (defaults to azimuth)
    -d, --date [date]                     Date (defaults to current date)
    -l, --location [latitude,longtitude]  Location
```    

The location option is required.
The date option is optional, defaults to the current datetime.

## Examples

### Get the azimuth of the sun for a given location

```sh
suncalc-cli -v azimuth -l 52.5072111,13.1449592
```

### Get sunrise time of the sun for tomorrow for a given location

```sh
suncalc-cli -v sunset -l 52.5072111,13.1449592 -d tomorrow
```

## License

Original suncalc-cli code: Apache-2.0 © [Tim Klingeleers](http://tim.klingeleers.be)
