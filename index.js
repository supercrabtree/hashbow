var hslToHex = require('tie-dye/hslToHex');

function hashbow(input, saturation, lightness) {
  var toColor, sum;

  var toColor, sum;

  switch (typeof input) {
    case 'object':
      toColor = JSON.stringify(input);
    break;
    case 'number':
      sum = input;
    break;
    case 'boolean':
      return hslToHex(input ? 120 : 0, saturation || 100, lightness || 50);
    break;
    case 'function':
      toColor = input.toString();
    break;
    case 'string':
    default:
      toColor = input;
  }

  if (sum === null) {
    sum = 0;
    toColor.split('').forEach(function (letter) {
      sum += letter.charCodeAt(0);
    });
  }

  sum = Math.abs(sum * sum);

  var color = hslToHex(sum % 360, saturation || 100, lightness || 50);
  return color;
}

module.exports = hashbow;
