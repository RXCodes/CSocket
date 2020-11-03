// Modify Dictionary Key
// Returns => JSON: dictionary, boolean: success
exports.modify_dictionary_key = function (dictionary, key, value) {
  try {
    var dict = JSON.parse(dictionary);
    dict[key] = value;
    return [dict, true];
    
  } catch (e) {
    return [dictionary, false];
  }
  var dict = JSON.parse(dictionary);
  dict[key] = value;
  return [dict, true];
};

// Get Dictionary Key
// Returns => string: value, boolean: success
exports.get_dictionary_key = function (dictionary, key, default_value) {
  try {
    var dict = JSON.parse(dictionary);
    return [dict[key], true];
  } catch (e) {
    return [default_value, false];
  }
  var dict = JSON.parse(dictionary);
  return [dict[key], true];
};

// Delete Dictionary Key
// Returns => JSON: dictionary, boolean: success
exports.delete_dictionary_key = function (dictionary, key) {
  try {
      var dict = JSON.parse(dictionary);
  if dict.hasOwnProperty(key) {
    delete dict[key];
    return [dict, true];
  }
else {
  return [dictionary, false];
 }
  } catch (e) {
    return [dictionary, false];
  }
  var dict = JSON.parse(dictionary);
  if dict.hasOwnProperty(key) {
    delete dict[key];
    return [dict, true];
  }
else {
return [dictionary, false];
 }
};

// Test for Key
// Returns => boolean: condition, boolean: success
// SIDENOTE: Works for both arrays and dictionaries!
exports.test_dictionary_key = function (dictionary, key) {
  try {
    var dict = JSON.parse(dictionary);
    if dict.hasOwnProperty(key) {
      return [true, true];
    }
  else {
  return [false, true];
   }
  } catch (e) {
    return [false, false];
  }
  var dict = JSON.parse(dictionary);
  if dict.hasOwnProperty(key) {
    return [true, true];
  }
else {
return [false, true];
 }
};

// Delete All Values
// Returns => JSON: array / dictionary, boolean: success
exports.set_dictionary = function (dictionary, key) {
  try {
var dict = JSON.parse(dictionary);
  for (var remove in dict) {
    if (dict.hasOwnProperty(remove)) {
        delete dict[remove];
      }
    }
} catch (e) {
    return [false];
  }
  var dict = JSON.parse(dictionary);
  for (var remove in dict) {
    if (dict.hasOwnProperty(remove)) {
        delete dict[remove];
    }
}
};

// Set JSON
// Returns => JSON: dictionary / array, boolean: success
exports.set_json = function (dictionary) {
  try {
    var dict = JSON.parse(dictionary);
    return [dict, true];
  } catch (e) {
    return [dictionary, false];
  }
  var dict = JSON.parse(dictionary);
  return [dict, true];
};

// Append value(s) to Array
// Returns => JSON: array, boolean: success
exports.append_value = function (array, value) {
  try {
    var dict = JSON.parse(array);
  dict.push(value);
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = JSON.parse(array);
  dict.push(value);
  return [dict, true];

};
