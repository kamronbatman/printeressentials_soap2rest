# Printer Essentials Soap to Rest
[![Build Status](https://travis-ci.org/kamronbatman/printeressentials_soap2rest.svg?branch=dev)](https://travis-ci.org/kamronbatman/printeressentials_soap2rest)
[![Dependency Status](https://david-dm.org/kamronbatman/printeressentials_soap2rest/dev.svg)](https://david-dm.org/kamronbatman/printeressentials_soap2rest)
[![devDependency Status](https://david-dm.org/kamronbatman/printeressentials_soap2rest/dev/dev-status.svg)](https://david-dm.org/kamronbatman/printeressentials_soap2rest#info=devDependencies)<br>

## Table of Contents

1. [Requirements](#requirements)
1. [Installation](#Installation)
    1. [Prerequisites](#prerequisites)
    1. [Environment Configuration File](#environment-configuration-file)
    1. [Deployment](#deployment)

## Requirements

### Backend
- [Node.js](https://nodejs.org/)
- [Express](http://expressjs.com/)

### Utilities
- [Grunt](http://gruntjs.com/)
- [npm](https://www.npmjs.com/)

## Installation

### Prerequisites

Install grunt-cli and forever using the following:
```
npm install -g grunt-cli forever
```

### Environment Configuration File

In the root of the project, add a file called `.env` with the following:
```
NODE_ENV    = 'development'

port            = 80
portDev         = 8000

emailAddress = 'test@printeressentials.com'
password = 'testepe2015'
```

In the .env file, change NODE_ENV to `production` for deployment on a production server.

### Deployment

With [Grunt](http://gruntjs.com/getting-started), and [npm](https://www.npmjs.com/#getting-started) installed globally, install dependencies by running the following commands from the terminal:
```
npm install
grunt
```

`grunt` starts the server. To build the project without starting the server, run `grunt build` instead of `grunt`.

To stop the server from running in the background in production mode, run `grunt stop`.