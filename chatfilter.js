
exports.process = function(data) {
  try {
    JSON.parse(data);
  } catch (e) {
    return "Error";
  }
  var dict = JSON.parse(data);
  if (dict.hasOwnProperty("message") && dict.hasOwnProperty("words")) {
  var filter = message; 
  
  var banned = JSON.parse(check);
  for (i = 0; i < banned.length; i++) {
    var count = "";
    var word = banned[i];
    for (x = 0; x < word.length; x++) {
count = count + "*";
}
    var re = new RegExp(banned[i],"gi");
      var filter = filter.replace(re,count);
      filter = filter.replace(banned[i],count);
  }
    data.filtered = filter;
  return data;
  }
}
