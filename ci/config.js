var _ = require("underscore");

var base = {
  credentials: {
    accessKeyId: "AKIAIGEHZO373H6MTW6Q",
    secretAccessKey: "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"
  }
};

module.exports = {
  cloudfront: {
    test: _.extend({
      distribution_id: "E39VRFWZNW82FD",
      invalidationPath: "/*"
    }, base),
    prod: _.extend({
      distribution_id: "E28VQE9ZA4MDHF",
      invalidationPath: "/*"
    }, base)
  }
};
