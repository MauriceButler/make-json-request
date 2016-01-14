# make-json-request

Wrapper around the request module that defaults to JSON and uses [request-callback-wrapper](https://www.npmjs.com/package/request-callback-wrapper)

## Why

Because I am sick of typing the same crap over and over again...

## Usage

Prety much the same as basic usage of [request](https://www.npmjs.com/package/request) except callback takes (error, result)

`makeJsonRequest(url, callback)`

or

`makeJsonRequest(options, callback)`

``` javascript

var makeJsonRequest = require('make-json-request');

makeJsonRequest('http://foo.com', function(error, result){

});

makeJsonRequest(
    {
        url: 'http://foo.com',
        method: 'POST'
    },
    function(error, result){

    }
);

```