// Behavior | Modify Dictionary Key
// Returns => dictionary: dictionary, boolean: successfully executed
exports.modify_dictionary_key = function (dictionary, key, value) {
  try {
    JSON.parse(dictionary);
  } catch (e) {
    return [dictionary, false];
  }
  var dict = JSON.parse(dictionary);
  dict[key] = value;
};
