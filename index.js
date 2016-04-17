var hslToHex = require('tie-dye/hslToHex');

function hashbow(input, saturation, lightness) {

  var toColor, sum;
  saturation = saturation || 100;
  lightness = lightness || 50;

  if (input === null || input === undefined) return hslToHex(0, 0, lightness);

  switch (input.constructor) {
    case Object:
    case Array:
      toColor = JSON.stringify(input);
    break;
    case Number:
      sum = input;
    break;
    case Boolean:
      return hslToHex(input ? 120 : 0, saturation, lightness);
    break;
    case Function:
      toColor = input.toString();
    break;
    case RegExp:
      toColor = input.toString();
    break;
    case String:
    default:
      toColor = input;
  }

  if (sum === undefined) {
    sum = 0;
    toColor.split('').forEach(function (letter) {
      sum += letter.charCodeAt(0);
    });
  }

  sum = Math.abs(sum * sum);

  return hslToHex(sum % 360, saturation, lightness);
}

module.exports = hashbow;
