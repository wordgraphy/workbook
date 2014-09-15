//console.log(process.argv);
var fs = require('fs');
var path = require('path');
filter = "." + process.argv[3];
buf = fs.readdir(process.argv[2], function(err,list){
  for (i = 0; i < list.length; i++) {
    if (path.extname(list[i]) == filter) {
      console.log(list[i]);
    }
  }
});
