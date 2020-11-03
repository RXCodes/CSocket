# What is CSocket?
**CSocket** allows users to easily program their own *Socket.io* server using visual coding; just like how hyperPad provides visual coding for creating apps and games. Users do not need to worry about coding at all, and it is completely free to deploy!

### Current Status
**CSocket** is not available in hyperPad yet, nor is it complete! I am currently working with the behavior system and the compile feature. I've only started, *(Nov 3, 2020)* and I cannot promise that this project will be successful.

### CSocket Documentation

The code for all the "behaviors" is located in the `framework` folder. They are organized into categories to make things as simple as possible. If you used **CSocket** to compile your project, you do not need to worry about the code at all and you can immediately deploy your project without hassles!

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/RXCodes/CSocket/)

This page only serves as a template / example -- do not use this project to create your own socket.io server! Compile your own project using **CSocket**!

### CSocket Behavior System
Just like in hyperPad, behaviors have multiple inputs and outputs. Once again, you can see them in `framework`. It would be impractical to attempt to code it yourself, unless you are experienced.

- All behaviors return a boolean of if execution was successful. *(returns false when a behavior has failed to execute.)*
- All behaviors directly don't modify anything, but provide an output which can be used in other behaviors. *(eg. modifying a dictionary THEN storing it into a variable -- this action requires 2 seperate behaviors.)*
- All behaviors are designed to be crash-proof, so any errors that come by are ignored.

All behaviors output an ARRAY of important information -- refer to the documentation below!
# Documentation
Here are all the behaviors that are currently supported.

**JSON Category**
- `json.modify_dictionary_key(dictionary, key, value)`
> _Returns [JSON: dictionary, BOOLEAN: success]_
- `json.get_dictionary_key(dictionary, key, default value)`
> _Returns [JSON: dictionary, BOOLEAN: success]_
- `json.delete_dictionary_key(dictionary, key)`
> _Returns [JSON: dictionary, BOOLEAN: success]_
- `json.test_dictionary_key(dictionary, key)`
> _Returns [JSON: dictionary, BOOLEAN: success]_
- `json.clear_json(dictionary, key, value)`
> _Returns [JSON: dictionary, BOOLEAN: success]_
