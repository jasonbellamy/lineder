"use strict";

var should   = require( "should" );
var lineder  = require( "../lib/lineder.js" );


describe( "lineder", function () {

  it( "should return the line number and value of a matched regular expression.", function( done ) {
    lineder( "test/fixtures/fixture" ).find( "line two", function ( err, results ) {
      results[0].line.should.equal( 2 );
      done();
    });
  });

});
