/* PROPER NAMING

* In clean code, it's important to prioritize meaningful 
and descriptive names that accurately represent the purpose 
and functionality of variables.

* Names should be intuitive and avoid unnecessary abbreviations or vague terms. 

* By choosing clear and expressive names, the code becomes
more self-explanatory and easier to understand for both the original 
developer and other team members who may work with the code in the future.

* GOOD NAMING:

The variable names customer, data, currentDate, daysSinceEventCreation, 
isLoading, and areProductsInCart are clear, descriptive, and convey their purpose effectively.

* IMPROVEMENT NEEDED:

The variable names yyyymmdd, timeSinceLastCheck, days, time, 
loading, and productsInCart could benefit from more descriptive and meaningful names. 
Consider using names that provide more context and clarity to improve the readability of the code.
*/

/* Meaningful */

// Define a customer object with an ID and name
const customer = { id: 1, name: 'John' }; // <-- GOOD NAMING

const data = { id: 1, name: 'John' }; // <-- IMPROVEMENT NEEDED

/* Pronounceable */

// Get the current date in the format 'YYYY/MM/DD'
const currentDate = moment().format('YYYY/MM/DD'); // <-- GOOD NAMING

const yyyymmdd = moment().format('YYYY/MM/DD'); // <-- IMPROVEMENT NEEDED

/* Detailed */

// Number of days since the event creation
const daysSinceEventCreation = 12; // <-- GOOD NAMING
// Time since the last check
const timeSinceLastCheck = 3756 // <-- GOOD NAMING

const days = 12; // <-- IMPROVEMENT NEEDED
const time = 3756; // <-- IMPROVEMENT NEEDED

/* Booleans */
//is, are, should, has, etc ...

// Flag indicating whether the page is currently loading
let isLoading = true; // <-- GOOD NAMING

// Flag indicating whether products are present in the cart
let areProductsInCart = false; // <-- GOOD NAMING

let loading = true; // <-- IMPROVEMENT NEEDED
let productsInCart = false; // <-- IMPROVEMENT NEEDED
