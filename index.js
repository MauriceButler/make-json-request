var makeRequest = require('request').defaults({json: true}),
    wrapCallback = require('request-callback-wrapper');

function makeJsonRequest(options, callback){
    return makeRequest(options, wrapCallback(callback));
}

module.exports = makeJsonRequest;