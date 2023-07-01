/* NAMING CONSTANTS

* Clean code naming of constants in JavaScript follows a few best practices. 
Here are some tips for naming constants in JavaScript:

- Use names that are capitalized and separated by an underscore (CONSTANT_CASE) for constants.

- Choose names that are descriptive and that accurately describe the meaning 
of the constant. Avoid abbreviations, single-letter variables, or obscure names.

- If the constant is related to a specific area or module, 
consider adding a prefix or module name to avoid name conflicts. 
Examples: USER_ROLE_ADMIN, DATABASE_CONNECTION_TIMEOUT.

- Try to maintain consistency in the naming of constants in your project. 
Use similar naming conventions for similar constant types.

- Avoid over-abbreviating constant names. Choose a name length 
that is descriptive enough that other programmers can easily understand the meaning of the constant.

- Remember that the names of constants should be semantically correct and reflect their essence and use.

*/

/* An example of the correct naming of constants: */

// Tax rate in decimal form
const TAX_RATE = 0.1;

// Base price of a product
const BASE_PRICE = 100;

// Calculate the final price including tax
const finalPrice = BASE_PRICE + (BASE_PRICE * TAX_RATE);

console.log(`The final price is: $${finalPrice}`);

