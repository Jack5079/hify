#!/usr/bin/env node
const H = require( './main' )
if ( process.argv.slice( 2 ).length ) {
  console.log( H( process.argv.slice( 2 ).join( ' ' ) ) ) // log the h'd arugements
  process.exit( 0 ) // exit
}

// this code is for when it's being piped / no arguments
process.stdin.resume();
process.stdin.setEncoding( 'utf8' );
process.stdin.on( 'data', function ( data ) {
  process.stdout.write( H( data ) );
} );
process.stdin.pause()