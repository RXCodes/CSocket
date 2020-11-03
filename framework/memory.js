// global storage object
var storage = {};

// store a global variable
exports.store = function (variable, value) {
  try {
    let storage[variable] = value;
  } catch (e) {
    return false;
	}
	storage[variable] = value;
	return true;
}

// retrieve a global variable
exports.retrieve = function (variable, default_value) {
  try {
    let test = storage[variable];
  } catch (e) {
    return default_value;
	}
	return storage[variable];
}

// delete a global variable
exports.delete = function (variable) {
  if (storage.hasOwnProperty(variable)) {
	delete storage[variable];
	return true;
	} else
		return false;
}
