// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var resultString = '';
  if (obj === null) {
    resultString += 'null';
  }
  else if (typeof obj === 'number' || typeof obj === 'boolean') {
    resultString += obj;
  }
  else if (typeof obj === 'string') {
    resultString += '"' + obj + '"';
  }
  
  return resultString;
};
