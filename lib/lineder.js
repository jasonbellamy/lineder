/**
 * lineder
 * https://github.com/jasonbellamy/lineder
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */

"use strict";

var fs = require( 'fs' );


/**
 * Finds and returns information on each line of the file that matches a regular expression.
 *
 * @param {string} path - the path of the file to search.
 * @return {Function} find - a function that accepts the regex to search the file for.
 * @example
 *
 * lineder( "path/to/file" ).find( "string", function( err, results ) {
 *  //=> [ { line: 1, value: "line one contains the word 'string'" } ]
 * });
 */
var lineder = function( path ) {

  if ( !path || {}.toString.call( path ) !== "[object String]" ) {
    throw new TypeError( "You must provide a path to the file to search." );
    return;
  }

  return {

    /**
     * Searches the file and returns a list of information for all the lines that matches the regular expression.
     *
     * @param {string} regex
     * @param {function} cb
     */
    find: function( regex, cb ) {

      if ( !regex || {}.toString.call( regex ) !== "[object String]" ) {
        cb( new TypeError( "You must provide a regular expression to search with." ) );
        return;
      }

      var results = [];

      fs.readFile( path, { encoding: "utf8" }, function( err, data ) {
        if ( err ) {
          cb( err );
          return;
        }

        data.split( '\n' ).forEach( function( value, index ) {
          if ( value.match( new RegExp( regex, 'gi' ) ) ) {
            results.push( { line: index + 1, value: value } );
          }
        });

        cb( null, results );
      });
    }
  };
};

module.exports = lineder;
