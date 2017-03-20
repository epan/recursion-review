// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// Plan
// If primitive, return stringified primitive
// If collection, check collection type (array or object)
  // If array, iterate through elements
    // If element is primitive, return stringified primitive
    // If element is collection, check collection type (recursion)
  // If object, iterate through keys
    // If value is primitive, return stringified primitive
    // If value is collection, check collection type (recursion)

function detectType(input) {
  if (typeof input === 'object') {
    if (input === null) {
      return 'null';
    } else if (Array.isArray(input)) {
      return 'array';
    } else {
      return 'object';
    }
  }
  return typeof input;
}

var stringifyJSON = function(obj) {
  var stringified = '';
  var objType = detectType(obj)

  // For primitives
  if (objType === 'string') {
    stringified += `"${obj}"`;
  } else if (objType !== 'array' || objType !== 'object') {
    stringified += ('' + obj);
  }

  if (objType === 'array') {
    var arrValues = [];
    obj.forEach(function(item) {
      arrValues.push(stringifyJSON(item));
    });
    return `[${arrValues.join(',')}]`;
  }

  if (objType === 'object') {
    var objValues = [];
    for (var key in obj) {
      var valueType = detectType(obj[key]);
      if (valueType !== 'function' && valueType !== 'undefined') {
        objValues.push(`"${key}":` + stringifyJSON(obj[key]));
      }
    }
    return `{${objValues.join(',')}}`;
  }

  return stringified;
};
