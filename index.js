var hslToHex = require('tie-dye/hslToHex');

function hashbow(input, saturation, lightness) {

  var inputAsString, sum;
  saturation = saturation || 50;
  lightness = lightness || 50;

  var greyValues = [null, undefined, [], {}, '', new RegExp()];

  if (greyValues.indexOf(input) != -1) {
    return hslToHex(0, 0, lightness);
  }

  switch (input.constructor) {
    case Function:
    case RegExp:
      inputAsString = input.toString();
    break;
    case Object:
    case Array:
      inputAsString = JSON.stringify(input);
    break;
    case Number:
      sum = input;
    break;
    case Boolean:
      return hslToHex(input ? 120 : 0, saturation, lightness);
    break;
    case String:
    default:
      inputAsString = input;
  }

  if (sum === undefined) {
    sum = 0;
    inputAsString.split('').forEach(function (letter) {
      sum += letter.charCodeAt(0);
    });
  }

  sum = Math.abs(sum * sum);

  return hslToHex(sum % 360, saturation, lightness);
}

module.exports = hashbow;
