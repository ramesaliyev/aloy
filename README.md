# aloy
![Aloy](./assets/aloy_cover.jpg)
[![Downloads](https://img.shields.io/npm/dt/aloy.svg)](https://www.npmjs.com/package/aloy)

[Aloy](https://www.google.com/search?q=horizon+zero+dawn+aloy), she is great. She is capable of everything. So i named my own zero-dep (for now atleast) NodeJS utilities / recipes /sandbox repo after her. I dont have idea why would anyone other than me want to use this, but if you want for some reason; use tests as documentation.

# Table of Contents

- [utils](./utils)
  - [cli](./utils/cli)
    - **argv.parseArgv**: cli argument parser, my own 80 line alternative for [minimist](https://www.npmjs.com/package/minimist). Parsing result is very similar to minimist with some nuance. Check tests. ([code](./utils/cli/argv.js), [tests](./tests/utils/cli/argv.js))

# Usage

##### Install

    npm i aloy

##### Example Usage

    const {parseArgv} = require('aloy/utils/cli/argv');

    const args = parseArgv(process.argv.slice(2));

    ...

# Development

##### Clone

    npx glone git@github.com:ramesaliyev/aloy.git