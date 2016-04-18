#!/usr/bin/env node

'use strict';

const meow = require('meow');
const hashbow = require('./');

const cli = meow(`
    Usage
      $ hashbow <input>

    Options
      -s, --saturation  Change the saturation of the output hex
      -l, --lightness   Change the lightness of the output hex

    Examples
      $ hashbow 'Hi Mum!' => #BF7540
`, {
  alias: {
    s: 'saturation',
    l: 'lightness'
  }
});


if (cli.input[0] === undefined) {
  process.exit(1);
} else {
  const res = hashbow(cli.input[0], cli.flags.saturation, cli.flags.lightness);
  process.stdout.write(res);
}
