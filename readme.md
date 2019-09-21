![Hify logo](https://raw.githubusercontent.com/Jack5079/hify/master/hify.png)

# Hify

Makes a string H.

## Usage

### CLI

```bash
npx Jack5079/hify Text goes here
```

Running without arguments creates a "h repl"

```bash
PS C:\Users\jacki\Desktop\Code Stuff\2019\Hify> npx Jack5079/hify
This is actually a bug
> Hhhh hh hhhhhhhh h hhh
```

You can also pipe it, allowing for uses like this:

```bash
C:\Users\jacki\Desktop\Code Stuff\2019\Hify> npx cowsay 'Testing with cowsay' -y | npx Jack5079/hify

 _____________________
< Hhhhhhh hhhh hhhhhh >
 ---------------------
        \   ^__^
         \  (..)\_______
            (__)\       )\/\
                ||----h |
                ||     ||
```

Note: Do not add quotes.

### Programmatically

```bash
npm i Jack5079/hify
```

```js
const H = require('hify')

console.log(H('Test string')) // -> Hhhh hhhhhh
```
