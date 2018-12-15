"use strict";

let globalObject = typeof self === "undefined" ? global : self;
module.exports = globalObject.fetch.bind(globalObject)

// Needed for TypeScript and Webpack.
exports.default = globalObject.fetch.bind(globalObject);

exports.Headers = globalObject.Headers;
exports.Request = globalObject.Request;
exports.Response = globalObject.Response;
