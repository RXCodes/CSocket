// global storage object
var storage = {};

// store a global variable
exports.store = function (variable, value) {
  try {
    storage[variable] = value;
  } catch (e) {
    return false;
	}
	storage[variable] = value;
	return true;
};

// retrieve a global variable
exports.retrieve = function (variable, default_value) {
  try {
    return storage[variable];
  } catch (e) {
    return [true, default_value];
	}
	return [true, storage[variable]];
};

// delete a global variable
exports.remove = function (variable) {
  if (storage.hasOwnProperty(variable)) {
	delete storage[variable];
	return true;
	} else
  return false;
};
