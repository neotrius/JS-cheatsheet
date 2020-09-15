// Math functions
Math.pow(2, 53)           // => 9007199254740992: 2 to the power 53
Math.round(.6)            // => 1.0: round to the nearest integer
Math.ceil(.6)             // => 1.0: round up to an integer
Math.floor(.6)            // => 0.0: round down to an integer
Math.abs(-5)              // => 5: absolute value
Math.max(x, y, z)         // Return the largest argument
Math.min(x, y, z)         // Return the smallest argument
Math.random()             // Pseudo-random number x where 0 <= x < 1.0
Math.PI                   // π: circumference of a circle / diameter
Math.E                    // e: The base of the natural logarithm
Math.sqrt(3)              // => 3**0.5: the square root of 3
Math.pow(3, 1 / 3)        // => 3**(1/3): the cube root of 3
Math.sin(0)               // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10)              // Natural logarithm of 10
Math.log(100) / Math.LN10 // Base 10 logarithm of 100
Math.log(512) / Math.LN2  // Base 2 logarithm of 512
Math.exp(3)               // Math.E cubed
// Math functions ES 6
Math.cbrt(27)             // => 3: cube root
Math.hypot(3, 4)          // => 5: square root of sum of squares of all arguments
Math.log10(100)           // => 2: Base-10 logarithm
Math.log2(1024)           // => 10: Base-2 logarithm
Math.log1p(x)             // Natural log of (1+x); accurate for very small x
Math.expm1(x)             // Math.exp(x)-1; the inverse of Math.log1p()
Math.sign(x)              // -1, 0, or 1 for arguments <, ==, or > 0
Math.imul(2,3)            // => 6: optimized multiplication of 32-bit integers
Math.clz32(0xf)           // => 28: number of leading zero bits in a 32-bit integer
Math.trunc(3.9)           // => 3: convert to an integer by truncating fractional part
Math.fround(x)            // Round to nearest 32-bit float number
Math.sinh(x)              // Hyperbolic sine. Also Math.cosh(), Math.tanh()
Math.asinh(x)             // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Strings
// Obtaining portions of a string
let s = "Hello, world";   // Start with some text.
s.substring(1,4)          // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4)              // => "ell": same thing
s.slice(-3)               // => "rld": last 3 characters
s.split(", ")             // => ["Hello", "world"]: split at delimiter string
// Searching a string
s.indexOf("l")            // => 2: position of first letter l
s.indexOf("l", 3)         // => 3: position of first "l" at or after 3
s.indexOf("zz")           // => -1: s does not include the substring "zz"
s.lastIndexOf("l")        // => 10: position of last letter l
// Boolean searching functions in ES6 and later
s.startsWith("Hell")      // => true: the string starts with these
s.endsWith("!")           // => false: s does not end with that
s.includes("or")          // => true: s includes substring "or"
// Creating modified versions of a string
s.replace("llo", "ya")    // => "Heya, world"
s.toLowerCase()           // => "hello, world"
s.toUpperCase()           // => "HELLO, WORLD"
s.normalize()             // Unicode NFC normalization: ES6
s.normalize("NFD")        // NFD normalization. Also "NFKC", "NFKD"
// Inspecting individual (16-bit) characters of a string
s.charAt(0)               // => "H": the first character
s.charAt(s.length-1)      // => "d": the last character
s.charCodeAt(0)           // => 72: 16-bit number at the specified position
s.codePointAt(0)          // => 72: ES6, works for codepoints > 16 bits
// String padding functions in ES2017
"x".padStart(3)           // => " x": add spaces on the left to a length of 3
"x".padEnd(3)             // => "x ": add spaces on the right to a length of 3
"x".padStart(3, "*")      // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-")        // => "x--": add dashes on the right to a length of 3
// Space trimming functions. trim() is ES5; others ES2019
" test ".trim()           // => "test": remove spaces at start and end
" test ".trimStart()      // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd()        // => " test": remove spaces at right. Also trimRight
// Miscellaneous string methods
s.concat("!")             // => "Hello, world!": just use + operator instead
"<>".repeat(5)            // => "<><><><><>": concatenate n copies. ES6
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Pattern matching, regex
let text = "testing: 1, 2, 3"; // Sample text
let pattern = /\d+/g;          // Matches all instances of one or more digits
pattern.test(text)             // => true: a match exists
text.search(pattern)           // => 9: position of first match
text.match(pattern)            // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#")     // => "testing: #, #, #"
text.split(/\D+/)              // => ["","1","2","3"]: split on nondigits
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Symbols
let strname = "string name";      // A string to use as a property name
let symname = Symbol("propname"); // A Symbol to use as a property name
typeof strname                    // => "string": strname is a string
typeof symname                    // => "symbol": symname is a symbol
let o = {};                       // Create a new object
o[strname] = 1;                   // Define a property with a string name
o[symname] = 2;                   // Define a property with a Symbol name
o[strname]                        // => 1: access the string-named property
o[symname]                        // => 2: access the symbol-named property
let s = Symbol.for("shared");
let t = Symbol.for("shared");
s === t                           // => true
s.toString()                      // => "Symbol(shared)"
Symbol.keyFor(t)                  // => "shared"
