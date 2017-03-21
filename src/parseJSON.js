// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

var testdata = '["one"]';
// => ['one'];
var testdata2 = '{"foo": "bar"}';

var parseJSON = function(json) {
  var firstChar = json[0];

  if (firstChar === '[') {
    // console.log('I think it\'s an array')
    var result = [];
    result.push(json[i+1]);

    // return result;
    return new Array(result.join(''));

  }

  if (firstChar === '"') {
    var substring = json.substring(i + 1);
    var cutAt = substring.indexOf('"');
    substring = substring.slice(0, cutAt);
    return substring;
  }

  if (firstChar === '{') {
    var objResult = {};
    return objResult;
  }

};
