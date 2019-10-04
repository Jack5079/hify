// Hify
module.exports = input => { // A function with input
  return input
    .replace( /[a-z]/g, 'h' )
    .replace( /[A-Z]/g, 'H' )
}