# Typed dockerode [![Build Status](https://travis-ci.org/typed-contrib/dockerode.svg?branch=master)](https://travis-ci.org/typed-contrib/dockerode)

Type definitions for [dockerode](https://github.com/apocas/dockerode).

## Installation

Installation can be done using [typings](https://github.com/typings/typings).

From the registry:
```bash
$ typings install dockerode --save
```

From the source:
```bash
$ typings install github:typed-contrib/dockerode --save
```

`dockerode` module works in `node.js` environment.
So you also have to install `node.js` typings.

```bash
$ typings install env~node --global --save
```

## Contributing

Contributions are welcome !

```bash
# Installation
# Fork this repo (https://github.com/typed-contrib/dockerode)
# Clone the fork (E.g. `https://github.com/<your_username>/dockerode.git`)
cd dockerode

# Install modules and dependencies
npm install

# Test typings over dockerode tests
npm test
```

Some resources to help writing Typescript type definitions:
 * [Writing Declaration Files](http://www.typescriptlang.org/docs/handbook/writing-declaration-files.html)
 * [typings examples](https://github.com/typings/typings/blob/master/docs/examples.md)

## Tests

This type definitions are tested using source `dockerode` `chai` [tests](https://github.com/apocas/dockerode/tree/master/test/).

## License

MIT

