//console.log(process.argv);
var fs = require('fs');
//console.log(fs.readFileSync('numbers.txt'));
buf = fs.readFile(process.argv[2], function(err,data){
  str = data.toString();
  //console.log(str);
  splitted = str.split("\n");
  //console.log(splitted);
  counted = splitted.length - 1;
  console.log(counted);
});
