// Modify Dictionary Key
// Returns => JSON: dictionary, boolean: success
exports.modify_dictionary_key = function (dictionary, key, value) {
  try {
    JSON.parse(dictionary);
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
    JSON.parse(dictionary);
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
    JSON.parse(dictionary);
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
    JSON.parse(dictionary);
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
