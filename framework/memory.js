// global storage object
var storage = {};

// store a global variable
exports.store = function (variable, value) {
  try {
    storage[variable] = value;
  } catch (e) {
    return [false];
	}
	storage[variable] = value;
	return [true];
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
exports.delete = function (variable) {
  if (storage[variable] !== undefined) {
	delete storage[variable];
	return [true];
	} else
  return [false];
};

// check if global variable exists
exports.check = function (variable) {
  if (storage[variable] !== undefined) {
	return [true, true];
	} else
  return [true, false];
};

// get all global variable names
exports.variables = function () {
  return [true, Object.keys(storage)];
};

// get global variable data
exports.data = function() {
  return [true, storage];
};

// reset global variables
exports.reset = function() {
  storage = {};
  return [true];
};
