\*\*\*\*# WCA Helpers

> Helpers and class definitions for WCA and WCIF

[![Actions Status](https://github.com/thewca/wca-helpers/workflows/Test/badge.svg)](https://github.com/thewca/wca-helpers/actions)
[![Coverage Status](https://coveralls.io/repos/github/thewca/wca-helpers/badge.svg?branch=master)](https://coveralls.io/github/thewca/wca-helpers?branch=master)
[![npm version](https://badge.fury.io/js/%40wca%2Fhelpers.svg)](https://badge.fury.io/js/%40wca%2Fhelpers)

This package contains typescript interfaces for the different classes used in WCIF, as well as a library of helper functions to help you deal with WCA data, such as calculating averages and en/de-coding multi blind results.

## Installation

```sh
npm install @wca/helpers --save
```

## Usage example

## Development setup

```sh
git clone
cd wca-helpers
npm install
npm run build
npm test
```

## Release process

- Create a new PR bumping `package.json` version (and update `CHANGELOG.md` if needed).
- Merge the change to `master`; the `Release` GitHub Action will run tests/build, create a tag `v<version>`, publish to npm, and generate a GitHub release.

## Contributing

1. Fork it (<https://github.com/thewca/wca-helpers/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Meta

Distributed under the GPL license. See `LICENSE` for more information.

[https://github.com/thewca/wca-helpers](https://github.com/thewca/wca-helpers)
