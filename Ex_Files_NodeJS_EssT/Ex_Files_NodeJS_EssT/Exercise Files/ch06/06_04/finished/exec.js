const cp = require("child_process");

//cp.exec("node readStream", (err, data, stderr) => {
//  console.log(data);
//});


//cp.exec("open http://www.linkedin.com/learning");
//cp.exec("open -a Terminal .");

cp.exec("dir", (err,data) => {
  if (err){
    throw err;
  }
});
