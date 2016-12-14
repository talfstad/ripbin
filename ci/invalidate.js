var cloudfront = require("./cloudfront");
var config = require("./config");

var branch = process.argv[2]
console.log("travis CI branch: " + branch);

if (branch == "test" || branch == "prod") {

  cloudfront.invalidate(branch);
} else {
	
  console.log("Could not invalidate, branch is not deployable.");
}
