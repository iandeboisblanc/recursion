// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var removeEndComma = function(string) {
    if (string.substr(string.length - 1) === ',') {
        string = string.slice(0,-1);
    }
    return string;
  };
  var resultString = '';
  if (typeof obj === 'function' || typeof obj === 'undefined') {} //do nothing
  else if (obj === null) {
    resultString += 'null';
  }
  else if (typeof obj === 'number' || typeof obj === 'boolean') {
    resultString += obj;
  }
  else if (typeof obj === 'string') {
    resultString += '"' + obj + '"';
  }
  else if (Array.isArray(obj)) {
    resultString += '[';
    for (var i = 0; i < obj.length; i++) {
      resultString += stringifyJSON(obj[i]);
      resultString += ','
    }
    resultString = removeEndComma(resultString);
    resultString += ']';
  }
  else {
    resultString += '{';
    for (var item in obj) {
      if (typeof obj[item] === 'function' || typeof obj[item] === 'undefined') {} //do nothing
      else {
        resultString += '"' + item + '":'
        resultString += stringifyJSON(obj[item]);
        resultString += ',';
      }
    }
    resultString = removeEndComma(resultString);
    resultString += '}';
  }
  return resultString;
};
