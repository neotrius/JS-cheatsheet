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
// Pattern matching, regex
let text = "testing: 1, 2, 3"; 	  // Sample text
let pattern = /\d+/g;          	  // Matches all instances of one or more digits
pattern.test(text)             	  // => true: a match exists
text.search(pattern)           	  // => 9: position of first match
text.match(pattern)            	  // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#")     	  // => "testing: #, #, #"
text.split(/\D+/)              	  // => ["","1","2","3"]: split on nondigits
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
////////////////////////////////////////////////////////////////////////////////
// Array, Arrays
// make a copy of arrayOriginal[]
let arrayCopy = Array.from(arrayOriginal)     
// compare two arrays
function equalArrays(a, b) {
    if (a === b) return true; // Identical arrays are equal
    if (a.length !== b.length) return false; // Different-size arrays not equal
    for(let i = 0; i < a.length; i++) { // Loop through all elements
        if (a[i] !== b[i]) return false; // If any differ, arrays not equal
    }
    return true; // Otherwise they are equal
}
////////////////////////////////////////////////////////////////////////////////
// Type conversion
Number("3")    // => 3
String(false)  // => "false": Or use false.toString()
Boolean([])    // => true
////////////////////////////////////////
x + ""  	   // => String(x)
+x      	   // => Number(x)
x-0     	   // => Number(x)
!!x     	   // => Boolean(x): Note double !
////////////////////////////////////////
let n = 17;
let binary = "0b" + n.toString(2); // binary == "0b10001"
let octal = "0o" + n.toString(8);  // octal == "0o21"
let hex = "0x" + n.toString(16);   // hex == "0x11"
////////////////////////////////////////
let n = 123456.789;
n.toFixed(0)               // => "123457"
n.toFixed(2)               // => "123456.79"
n.toFixed(5)               // => "123456.78900"
n.toExponential(1)         // => "1.2e+5"
n.toExponential(3)         // => "1.235e+5"
n.toPrecision(4)           // => "1.235e+5"
n.toPrecision(7)           // => "123456.8"
n.toPrecision(10)          // => "123456.7890"
parseInt("3 blind mice")   // => 3
parseFloat(" 3.14 meters") // => 3.14
parseInt("-12.34")         // => -12
parseInt("0xFF")           // => 255
parseInt("0xff")           // => 255
parseInt("-0XFF")          // => -255
parseFloat(".1")           // => 0.1
parseInt("0.1")            // => 0
parseInt(".1")             // => NaN: integers can't start with "."
parseFloat("$72.47")       // => NaN: numbers can't start with "$"
parseInt("11", 2)          // => 3: (1*2 + 1)
parseInt("ff", 16)         // => 255: (15*16 + 15)
parseInt("zz", 36)         // => 1295: (35*36 + 35)
parseInt("077", 8)         // => 63: (7*8 + 7)
parseInt("077", 10)        // => 77: (7*10 + 7)
////////////////////////////////////////
// toString() and valueOf() methods
({x:1, y:2}).toString()            // => "[object Object]"
[1,2,3].toString()                 // => "1,2,3"
(function(x) { f(x); }).toString() // => "function(x) { f(x); }"
/\d+/g.toString()                  // => "/\\d+/g"
(new Date(2020,0,1)).toString()    // => "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)"
(new Date(2020,0,1)).valueOf()     // => 1577833200000
////////////////////////////////////////
// destructuing assignment
let [x,y] = [1]                                    // x == 1; y == undefined
[x,y] = [1,2,3]                                    // x == 1; y == 2
[,x,,y] = [1,2,3,4]                                // x == 2; y == 4
let [x, ...y] = [1,2,3,4]                          // y == [2,3,4]
let [a, [b, c]] = [1, [2,2.5], 3]                  // a == 1; b == 2; c == 2.5
let [first, ...rest] = "Hello"                     // first == "H"; rest == ["e","l","l","o"]
let {r, g, b} = {r: 0.0, g: 0.0, b: 0.0, a: 1.0}   // r == 0.0; g == 0.0; b == 0.0
//
const {sin, cos, tan} = Math                       // Same as const sin=Math.sin, cos=Math.cos, tan=Math.tan
const { cos: cosine, tan: tangent } = Math         // Same as const cosine = Math.cos, tangent = Math.tan;
// 
let points = [{x: 1, y: 2}, {x: 3, y: 4}]          // An array of two point objects
let [{x: x1, y: y1}, {x: x2, y: y2}] = points      // destructured into 4 variables.
(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4)     // => true
// 
let points = { p1: [1,2], p2: [3,4] }              // An object with 2 array props
let { p1: [x1, y1], p2: [x2, y2] } = points        // destructured into 4 vars
(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4)     // => true
//
let points = [{x: 1, y: 2}, {x: 3, y: 4}]
let [{x: x1, y: y1}, {x: x2, y: y2}] = points
let points2 = [{x: x1, y: y1}, {x: x2, y: y2}]     // points2 == points
////////////////////////////////////////////////////////////////////////////////
// conditional property access (avoid TypeError)
let a = { b: null }
a.b.c.d   // TypeError: Cannot read property 'c' of null
a.b?.c.d  // => undefined
a.b?.c?.d // => undefined
//
let a, b = [0, 'hola']
a[b[0]]   // TypeError: Cannot read property '0' of undefined
a?.[b[0]] // => undefined
//
let a, index = 0
try {a[index++]  // Throws TypeError
}catch(e){index} // => 1: increment occurs before TypeError is thrown
// Invocation Expressions
// conditional invocation
let f = null, x = 0;
f?.(x++)   // => undefined: f is null, but no exception thrown
let a = {fun(){return 1}}
a.fun()    // 1
a?.fun?.() // 1
a?.asd?.() // undefined
////////////////////////////////////////////////////////////////////////////////
// the + operator and less than
1 + 2         // => 3: addition
"1" + "2"     // => "12": concatenation
"1" + 2       // => "12": concatenation after number-to-string
1 + {}        // => "1[object Object]": concatenation after object-to-string
true + true   // => 2: addition after boolean-to-number
2 + null      // => 2: addition after null converts to 0
2 + undefined // => NaN: addition after undefined converts to NaN
1 + 2 + " blind mice"   // => "3 blind mice"
1 + (2 + " blind mice") // => "12 blind mice"
"11" < "3"    // => true: string comparison.
"11" < 3      // => false: numeric comparison, "11" converted to 11.
"one" < 3     // => false: numeric comparison, "one" converted to NaN.
// the in operator
let point = {x: 1, y: 1} // Define an object
"x" in point // => true: object has property named "x"
"z" in point // => false: object has no "z" property.
"toString" in point // => true: object inherits toString method
let data = [7,8,9] // An array with elements (indices) 0, 1, and 2
"0" in data // => true: array has an element "0"
1 in data // => true: numbers are converted to strings
3 in data // => false: no element 3
// instanceof operator
let d = new Date() // Create a new object with the Date() constructor
d instanceof Date // => true: d was created with Date()
d instanceof Object // => true: all objects are instances of Object
d instanceof Number // => false: d is not a Number object
let a = [1, 2, 3] // Create an array with array literal syntax
a instanceof Array // => true: a is an array
a instanceof Object // => true: all arrays are objects
a instanceof RegExp // => false: arrays are not regular expressions
// eval is evil
// allows you to execute strings of code as if they were independent, top-level scripts
const geval = eval // Using another name does a global eval
let x = "global", y = "global" // Two global variables
function f() { // This function does a local eval
	let x = "local" // Define a local variable
	eval("x += 'changed'") // Direct eval sets local variable
	return x // Return changed local variable
}
function g() { // This function does a global eval
	let y = "local" // A local variable
	geval("y += 'changed'") // Indirect eval sets global variable
	return y // Return unchanged local variable
}
console.log(f(), x) // Local variable changed: prints "localchanged global":
console.log(g(), y) // Global variable changed: prints "local globalchanged":
// ternary operator
x > 0 ? x : -x // the absolute value of x
greeting = "hello " + (username ? username : "there")
// first-defined operator ??
// If maxWidth is defined, use that. Otherwise, look for a value in
// the preferences object. If that is not defined, use a hardcoded constant.
let max = maxWidth ?? preferences.maxWidth ?? 500
let options = { timeout: 0, title: "", verbose: false, n: null }
options.timeout ?? 1000       // => 0: as defined in the object
options.timeout || 1000       // => 1000
options.title   ?? "Untitled" // => "": as defined in the object
options.title   || "Untitled" // => "Untitled"
options.verbose ?? true       // => false: as defined in the object
options.verbose || true       // => true
options.quiet   ?? false      // => false: property is not defined
options.quiet   || false      // => false
options.n       ?? 10         // => 10: property is null
options.n       || 10         // => 10
// typeof operator
let x
typeof(x = undefined)         // => "undefined"
typeof(x = null)              // => "object"
typeof(x = true, x = false)   // => "boolean"
typeof(x = 10, x = NaN)       // => "number"
typeof(x = 9007199254740991n) // => "bigint"
typeof(x = "hey sweetie")     // => "string"
typeof(x = Symbol("data"))    // => "symbol"
typeof(x = function y(){})    // => "function"
typeof(x = {})                // => "object"
