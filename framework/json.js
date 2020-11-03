// Modify Dictionary Key
// Returns => JSON: dictionary, boolean: success
exports.modify_dictionary_key = function (dictionary, key, value) {
  try {
    let dict = JSON.parse(dictionary);
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
    let dict = JSON.parse(dictionary);
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
      let dict = JSON.parse(dictionary);
  if (dict.hasOwnProperty(key)) {
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
  if (dict.hasOwnProperty(key)) {
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
    let dict = JSON.parse(dictionary);
    if (dict.hasOwnProperty(key)) {
      return [true, true];
    }
  else {
  return [false, true];
   }
  } catch (e) {
    return [false, false];
  }
  var dict = JSON.parse(dictionary);
  if (dict.hasOwnProperty(key)) {
    return [true, true];
  }
else {
return [false, true];
 }
};

// Delete All Values
// Returns => JSON: array / dictionary, boolean: success
exports.clear_json = function (dictionary) {
  try {
let dict = JSON.parse(dictionary);
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
    let dict = JSON.parse(dictionary);
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
    let dict = JSON.parse(array);
  dict.push(value);
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = JSON.parse(array);
  dict.push(value);
  return [dict, true];

};

// Insert value in Array
// Returns => JSON: array, boolean: success
exports.insert_value = function (array, value, index) {
  try {
    let dict = JSON.parse(array);
  dict.splice(index, 0, value);
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = JSON.parse(array);
  dict.splice(index, 0, value);
  return [dict, true];

};

// Replace value in Array
// Returns => JSON: array, boolean: success
exports.replace_value = function (array, value, index) {
  try {
    let dict = JSON.parse(array);
  dict.splice(index, 1, value);
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = JSON.parse(array);
  dict.splice(index, 1, value);
  return [dict, true];

};

// Alphabetically Sort Array
// Returns => JSON: array, boolean: success
exports.sort_value = function (array) {
  try {
    let dict = JSON.parse(array);
  dict.sort();
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = JSON.parse(array);
  dict.sort();
  return [dict, true];

};

// Reverse Array
// Returns => JSON: array, boolean: success
exports.reverse_value = function (array) {
  try {
    let dict = JSON.parse(array);
  dict.reverse();
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = JSON.parse(array);
  dict.reverse();
  return [dict, true];

};

// Ascending Numeric Sort Array
// Returns => JSON: array, boolean: success
exports.ascending_numeric_sort_value = function (array) {
  try {
    let dict = JSON.parse(array);
  dict.sort(function(a, b){return a - b});
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = JSON.parse(array);
  dict.sort(function(a, b){return a - b});
  return [dict, true];

};

// Descending Numeric Sort Array
// Returns => JSON: array, boolean: success
exports.descending_numeric_sort_value = function (array) {
  try {
    let dict = JSON.parse(array);
  dict.sort(function(a, b){return b - a});
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = JSON.parse(array);
  dict.sort(function(a, b){return b - a});
  return [dict, true];

};

// Random Sort Array
// Returns => JSON: array, boolean: success
exports.random_sort_value = function (array) {
  try {
    let dict = JSON.parse(array);
  dict.sort(function(a, b){return 0.5 - Math.random()});
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = JSON.parse(array);
  dict.sort(function(a, b){return 0.5 - Math.random()});
  return [dict, true];

};

// Get Key Values
// Returns => JSON: array, boolean: success
exports.get_keys = function (dictionary) {
  try {
    let dict = JSON.parse(dictionary);
  Object.keys(dict);
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = JSON.parse(array);
  Object.keys(dict);
  return [dict, true];

};
