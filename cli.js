#!/usr/bin/env node
const H = require( './main.js' ) // We use Hify
console.log( H( process.argv.slice( 2 ).join( ' ' ) ) ) // log the h'd arugements