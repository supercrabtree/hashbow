'use strict';

exports = module.exports = hashbow;

function pad2(c) {
  return c.length === 1 ? '0' + c : '' + c;
}

function hsl2hex(h, s, l) {
  var r, g, b, m, c, x, hex;

  if (!isFinite(h)) h = 0;
  if (!isFinite(s)) s = 0;
  if (!isFinite(l)) l = 0;

  h /= 60;
  if (h < 0){
    h = 6 - (-h % 6);
  }
  h %= 6;

  s = Math.max(0, Math.min(1, s / 100));
  l = Math.max(0, Math.min(1, l / 100));

  c = (1 - Math.abs((2 * l) - 1)) * s;
  x = c * (1 - Math.abs((h % 2) - 1));

  if (h < 1) {
    r = c;
    g = x;
    b = 0;
  } else if (h < 2) {
    r = x;
    g = c;
    b = 0;
  } else if (h < 3) {
    r = 0;
    g = c;
    b = x;
  } else if (h < 4) {
    r = 0;
    g = x;
    b = c;
  } else if (h < 5) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }

  m = l - c / 2;
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16))
  ];
  return '#' + hex.join('');
}

function hashbow(input, saturation, lightness) {
  var toColor, sum;

  if (!!input || input === 0) return hsl2hex(0, saturation || 100, lightness || 50);

  switch (typeof input) {
    case 'object':
      toColor = JSON.stringify(input);
    break;
    case 'number':
      sum = input;
    break;
    case 'boolean':
      return hsl2hex(input ? 120 : 0, saturation || 100, lightness || 50);
    break;
    case 'function':
      toColor = input.toString();
    break;
    case 'string':
    default:
      toColor = input;
  }
  if (!sum) {
    sum = 0;
    toColor.split('').forEach(function (letter) {
      sum += letter.charCodeAt(0);
    });
  }

  sum = Math.abs(sum * sum);

  var color = hsl2hex(sum % 360, saturation || 100, lightness || 50);
  return color;
}