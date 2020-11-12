# What is CSocket?
**CSocket** allows users to easily program their own *Socket.io* server using visual code; just like how hyperPad provides visual coding for creating apps and games. Users do not need to worry about syntaxes and errors at all, and it is completely free to deploy!

### Current Status
**CSocket** is not available in hyperPad yet, nor is it complete! I am currently working with the behavior system and the compile feature. I've only started, *(Nov 3, 2020)* and I cannot promise that this project will be successful.

### CSocket Documentation

The code for all the "behaviors" is located in the `framework` folder. They are organized into categories to make things as simple as possible. If you used **CSocket** to compile your project, you do not need to worry about the code at all and you can immediately deploy your project without hassles!

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/RXCodes/CSocket/)

This page only serves as a template / example -- do not use this project to create your own socket.io server! Compile your own project using **CSocket**!

### CSocket Behavior System
Just like in hyperPad, behaviors have multiple inputs and outputs. Once again, you can see them in `framework`. It would be impractical to attempt to code it yourself, unless you are experienced.

- Many behaviors return a boolean of if execution was successful. *(returns false when a behavior has failed to execute.)*
- All behaviors directly *usually* don't modify anything, but provide an output which can be used in other behaviors. *(eg. modifying a dictionary THEN storing it into a variable -- this action requires 2 seperate behaviors.)*
- All behaviors are designed to be crash-proof, so any errors that come by are ignored.

**All behaviors output an ARRAY of important information -- refer to the documentation below!** A behavior output can be referenced by storing it inside a variable and getting an index from it.

### **example:**
> ``let output = behavior_function();``
> ``let example = output[0];``
# Documentation
Here are all the behaviors that are currently supported in **CSocket**. Behaviors marked with **🟢** are **fully supported** in both the **CSocket Behavior Editor** and the server itself when compiled.

## Global Storage Category *(7)*
- `storage.store(variable, value);`
> _Returns [BOOLEAN: success]_
>> Declare / set a global variable.
- `storage.retrieve(variable, default value);`
> _Returns [BOOLEAN: success, STRING: variable]_
>> Get the value of a global variable. Returns default value if variable does not exist.
- `storage.delete(variable);`
> _Returns [BOOLEAN: success]_
>> Delete a global variable.
- `storage.check(variable);`
> _Returns [BOOLEAN: success, BOOLEAN: condition]_
>> Check if a global variable exists.
- `storage.data();`
> _Returns [BOOLEAN: success, JSON: dictionary]_
>> Retrieve all global variables as a JSON.
- `storage.variables();`
> _Returns [BOOLEAN: success, JSON: array]_
>> Retrieve global variables names as an array.
- `storage.reset();`
> _Returns [BOOLEAN: success]_
>> Clears all global variables.

## JSON Category *(22)*
- `json.modify_dictionary_key(dictionary, key, value);`
> _Returns [JSON: dictionary, BOOLEAN: success]_
>> Set a key in a dictionary.
- `json.get_dictionary_key(dictionary, key, default value);`
> _Returns [STRING: value, BOOLEAN: success]_
>> Get a value of a key in a dictionary. Returns default value is key does not exist.
- `json.get_array_count(array);`
> _Returns [INTEGER: count, BOOLEAN: success]_
>> Get the amount of items in an array.
- `json.get_array_value(array, index, default value);`
> _Returns [STRING: value, BOOLEAN: success]_
>> Get a value by the specified index in an array.
- `json.get_first_array_value(array, default value);`
> _Returns [STRING: value, BOOLEAN: success]_
>> Get the value by the first index in an array.
- `json.get_last_array_value(array, default value);`
> _Returns [STRING: value, BOOLEAN: success]_
>> Get a value by the last index in an array.
- `json.get_random_array_value(array);`
> _Returns [STRING: value, BOOLEAN: success]_
>> Get any random value in an array.
- `json.delete_dictionary_key(dictionary, key);`
> _Returns [JSON: dictionary, BOOLEAN: success]_
>> Delete a key in a dictionary.
- `json.get_keys(dictionary);`
> _Returns [JSON: array, BOOLEAN: success]_
>> Returns an array of keys in a dictionary.
- `json.test_dictionary_key(dictionary / array, key);`
> _Returns [BOOLEAN: condition, BOOLEAN: success]_
>> Test if a key exists in a dictionary / array.
- `json.clear_json(dictionary / array);`
> _Returns [JSON: dictionary / array, BOOLEAN: success]_
>> Clear the contents of a dictionary / array.
- `json.convert_to_json(string of dictionary or array);`
> _Returns [JSON: dictionary / array, BOOLEAN: success]_
>> Converts a string into JSON. (array / dictionary)
- `json.convert_from_json(dictionary / array);`
> _Returns [STRING: json, BOOLEAN: success]_
>> Converts a JSON object into a string.
- `json.append_value(array, string / array);`
> _Returns [JSON: array, BOOLEAN: success]_
>> Append value(s) in an array.
- `json.insert_value(array, string, index);`
> _Returns [JSON: array, BOOLEAN: success]_
>> Insert a value in specified index in an array.
- `json.replace_value(array, string, index);`
> _Returns [JSON: array, BOOLEAN: success]_
>> Replace a value in specified index with an another value in an array.
- `json.pop(array);`
> _Returns [JSON: array, BOOLEAN: success]_
>> Removes the value at the last index in an array.
- `json.delete_index(array, index);`
> _Returns [JSON: array, BOOLEAN: success]_
>> Removes a value at a specified index in an array.
- `json.sort_array(array);`
> _Returns [JSON: array, BOOLEAN: success]_
>> Alphabetically sort an array.
- `json.reverse_array(array);`
> _Returns [JSON: array, BOOLEAN: success]_
>> Reverse an array.
- `json.ascending_numeric_sort_array(array);`
> _Returns [JSON: array, BOOLEAN: success]_
>> Sorts an array by numerical order in ascending fashion.
- `json.descending_numeric_sort_array(array);`
> _Returns [JSON: array, BOOLEAN: success]_
>> Sorts an array by numerical order in descending fashion.
- `json.random_sort_array(array);`
> _Returns [JSON: array, BOOLEAN: success]_
>> Shuffles the array randomly.
