# Lineder [![Build Status](https://travis-ci.org/jasonbellamy/lineder.png?branch=master)](https://travis-ci.org/jasonbellamy/lineder)

> Finds and returns information on each line of the file that matches a regular expression.


## Features
[Lineder](https://github.com/jasonbellamy/lineder) finds and returns information on each line of the file that matches your search.

- Search with regular expressions.
- Get the line number(s) that the matched result was found on.
- Get the entire line(s) that the matched result was found in.


## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save lineder`


## Usage

```javascript
var lineder = require( "lineder" );

/* file.txt
   1. this is the text for line one.
   2. this is the text for line two.
   3. this is the text for line three.
*/

lineder( "file.txt", "line two", function( err, results ) {
  //=> [ { line: 2, value "this is the text for line two." } ]
});
```


## API

### lineder( path )

Name   | Type     | Argument     | Description
-------|----------|--------------|------------
path   | `string` | `<required>` | the path of the file to be searched.

### lineder.find( regex, callback )

Name     | Type           | Argument     | Description
---------|----------------|--------------|------------
regex    | `string|regex` | `<required>` | a string or regular expression to search the file for.
callback | `function`     | `<required>` | callback that returns the results of the search

#### callback( error, results )

Name     | Type       | Argument     | Description
---------|------------|--------------|------------
error    | `error`    | `<required>` | any errors that may have occured.
results  | `array`    | `<required>` | an array of objects containg the line number and values from the results of the search.

## Contributing

## License
Copyright (c) 2015 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
