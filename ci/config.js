var _ = require("underscore");

var base = {
  credentials: {
    accessKeyId: "AKIAIGEHZO373H6MTW6Q",
    secretAccessKey: "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"
  }
};

module.exports = function(env) {
  switch (env) {
    case "test":
      return _.extend({
        distribution_id: "E39VRFWZNW82FD",
        invalidationPath: "/*"
      }, base)
      break;
    case "prod":
      _.extend({
        distribution_id: "E28VQE9ZA4MDHF",
        invalidationPath: "/*"
      }, base)
      break;
  }
};
