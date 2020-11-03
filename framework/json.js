// Modify Dictionary Key
// Returns => dictionary: dictionary, boolean: if successfully executed
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
// Returns => string: value, boolean: is successfully executed
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
// Returns => dictionary: dictionary, boolean: if successfully executed
exports.delete_dictionary_key = function (dictionary, key) {
  try {
    JSON.parse(dictionary);
  } catch (e) {
    return [dictionary, false];
  }
  var dict = JSON.parse(dictionary);
  return [dict[key], true];
};
