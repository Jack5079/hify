// Hify
export default input => { // A function with input
  return input.split( '' ).map( str => { // Make it an array and do a map (Changing every letter)
    if ( str.length === 1 && str.match( /[a-z]/i ) ) {
      if ( str === str.toUpperCase() ) // If it's uppercase
        return 'H' // H
      else // If it's lowercase
        return 'h' // h
    } else return str // Don't change it if it's not a letter
  } ).join( '' ) // Make it a string again
}