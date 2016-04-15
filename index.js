var hslToHex = require('tie-dye/hslToHex');

function hashbow(input, saturation, lightness) {

  var toColor, sum;
  saturation = saturation || 100;
  lightness = lightness || 50;

  switch (typeof input) {
    case 'object':
      toColor = JSON.stringify(input);
    break;
    case 'number':
      sum = input;
    break;
    case 'boolean':
      return hslToHex(input ? 120 : 0, saturation, lightness);
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

  return hslToHex(sum % 360, saturation, lightness);
}

module.exports = hashbow;
