// Modify Dictionary Key
// Returns => JSON: dictionary, boolean: success
exports.modify_dictionary_key = function (dictionary, key, value) {
  try {
    let dict = dictionary;
    dict[key] = JSON.stringify(value);
    return [dict, true];
    
  } catch (e) {
    return [dictionary, false];
  }
  var dict = dictionary;
  dict[key] = value;
  return [dict, true];
};

// Get Dictionary Key
// Returns => string: value, boolean: success
exports.get_dictionary_key = function (dictionary, key, default_value) {
  try {
    let dict = dictionary;
    return [dict[key], true];
  } catch (e) {
    return [default_value, false];
  }
  var dict = JSON.parse(dictionary);
  return [JSON.parse(dict[key]), true];
};

// Delete Dictionary Key
// Returns => JSON: dictionary, boolean: success
exports.delete_dictionary_key = function (dictionary, key) {
  try {
      let dict = dictionary;
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
  var dict = dictionary;
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
    let dict = dictionary;
    if (dict.hasOwnProperty(key)) {
      return [true, true];
    }
  else {
  return [false, true];
   }
  } catch (e) {
    return [false, false];
  }
  var dict = dictionary;
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
let dict = dictionary;
  for (var remove in dict) {
    if (dict.hasOwnProperty(remove)) {
        delete dict[remove];
      }
    }
} catch (e) {
    return [false];
  }
  var dict = dictionary;
  for (var remove in dict) {
    if (dict.hasOwnProperty(remove)) {
        delete dict[remove];
    }
  }
};

// Set JSON from string
// Returns => JSON: dictionary / array, boolean: success
exports.convert_to_json = function (dictionary) {
  try {
    let dict = JSON.parse(dictionary);
    return [dict, true];
  } catch (e) {
    return [dictionary, false];
  }
  var dict = JSON.parse(dictionary);
  return [dict, true];
};

// Set JSON from string
// Returns => STRING: dictionary / array, boolean: success
exports.convert_from_json = function (dictionary) {
  try {
    let dict = JSON.stringify(dictionary);
    return [dict, true];
  } catch (e) {
    return [dictionary, false];
  }
  var dict = JSON.stringify(dictionary);
  return [dict, true];
};

// Append value(s) to Array
// Returns => JSON: array, boolean: success
exports.append_value = function (array, value) {
  try {
    let dict = array;
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
    let dict = array;
  dict.splice(index, 0, value);
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = array;
  dict.splice(index, 0, value);
  return [dict, true];

};

// Replace value in Array
// Returns => JSON: array, boolean: success
exports.replace_value = function (array, value, index) {
  try {
    let dict = array;
  dict.splice(index, 1, value);
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = array;
  dict.splice(index, 1, value);
  return [dict, true];

};

// Alphabetically Sort Array
// Returns => JSON: array, boolean: success
exports.sort_array = function (array) {
  try {
    let dict = array;
  dict.sort();
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = array;
  dict.sort();
  return [dict, true];

};

// Reverse Array
// Returns => JSON: array, boolean: success
exports.reverse_array = function (array) {
  try {
    let dict = array;
  dict.reverse();
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = array;
  dict.reverse();
  return [dict, true];

};

// Ascending Numeric Sort Array
// Returns => JSON: array, boolean: success
exports.ascending_numeric_sort_array = function (array) {
  try {
    let dict = array;
  dict.sort(function(a, b){return a - b});
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = array;
  dict.sort(function(a, b){return a - b});
  return [dict, true];

};

// Descending Numeric Sort Array
// Returns => JSON: array, boolean: success
exports.descending_numeric_sort_array = function (array) {
  try {
    let dict = array;
  dict.sort(function(a, b){return b - a});
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = array;
  dict.sort(function(a, b){return b - a});
  return [dict, true];

};

// Random Sort Array
// Returns => JSON: array, boolean: success
exports.random_sort_array = function (array) {
  try {
    let dict = array;
  dict.sort(function(a, b){return 0.5 - Math.random()});
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = array;
  dict.sort(function(a, b){return 0.5 - Math.random()});
  return [dict, true];

};

// Get Key Values
// Returns => JSON: array, boolean: success
exports.get_keys = function (dictionary) {
  try {
    let dict = dictionary;
  Object.keys(dict);
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = dictionary;
  Object.keys(dict);
  return [dict, true];

};

// Remove Last Index from Array
// Returns => JSON: array, boolean: success
exports.pop = function (array) {
  try {
    let dict = array;
  dict.pop();
  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = array;
  dict.pop();
  return [dict, true];

};

// Remove Index from Array
// Returns => JSON: array, boolean: success
exports.delete_index = function (array, index) {
  try {
    let dict = array;
  dict.splice(index, array);

  return [dict, true];
  } catch (e) {
    return [array, false];
  }
  var dict = array;
  dict.splice(index, array);
  return [dict, true];

};

// Get Array Count
// Returns => integer: count, boolean: success
exports.count = function (array) {
  try {
    let dict = array;
  return [dict.length(), true];
  } catch (e) {
    return [0, false];
  }
  var dict = array;
  return [dict.length(), true];

};

// Get Array Value by Index
// Returns => string: value, boolean: success
exports.get_array_value = function (array, index, default_value) {
  try {
    let dict = array;
  return [dict[index], true];
  } catch (e) {
    return [default_value, true];
  }
  var dict = array;
  return [dict[index], true];

};

// Get First Array Value
// Returns => string: value, boolean: success
exports.get_first_array_value = function (array, default_value) {
  try {
    let dict = array;
  return [dict[0], true];
  } catch (e) {
    return [default_value, true];
  }
  var dict = array;
  return [dict[0], true];

};

// Get Last Array Value
// Returns => string: value, boolean: success
exports.get_first_array_value = function (array, default_value) {
  try {
    let dict = array;
  return [dict[dict.length() - 1], true];
  } catch (e) {
    return [default_value, true];
  }
  var dict = array;
  return [dict[dict.length() - 1], true];

};

// Get Random Value
// Returns => string: value, boolean: success
exports.get_random_array_value = function (array) {
  try {
    let dict = array;
  return [dict[Math.floor((Math.random() * dict.length() - 1) + 1)], true];
  } catch (e) {
    return [default_value, true];
  }
  var dict = array;
  return [dict[Math.floor((Math.random() * dict.length() - 1) + 1)], true];

};
