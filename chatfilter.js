exports.process = function(message, check) {
  if (typeof message != "undefined" && typeof check != "undefined") {
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
  return filter;
  }
}
