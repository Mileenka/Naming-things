/** NAME CASING

When it comes to naming variables in JavaScript, the first thing to consider is the casing convention. 
There are various naming conventions available, such as snake_case, camelCase, PascalCase and kebab-case. 
Among these options, the most commonly used convention in JavaScript is camel case.

 */

/* *snake_case: In snake case, words are written in lowercase
and separated by underscores (_). 
For example, first_name = 'John'; 
follows the snake case convention. 
However, it's not commonly used in JavaScript. */ 

let first_name = 'John';

/* *camelCase: In camel case, the first letter of the variable name starts with lowercase, 
and each subsequent word begins with an uppercase letter, 
without any separators. 
For example, firstName = 'John'; follows the camel case convention. 
Camel case is widely used in JavaScript for variable and function names. */

let firstName = 'John';

/* *PascalCase: In Pascal case, also known as Upper Camel case, 
the first letter of each word, including the first word, is capitalized without any separators. 
For example, FirstName = 'John';
 follows the Pascal case convention. 
 Pascal case is primarily used for naming classes and constructor functions in JavaScript. */

let FirstName = 'John';

/* kebab-case: In kebab case, words are written in lowercase and separated by hyphens (-). 
However, JavaScript does not allow using kebab case for variable names directly. 
Instead, it is often used for naming properties or attributes in objects or HTML elements. 
For example, user = { 'first-name': 'John' }; uses kebab case for the property name 'first-name'.*/

let user = { 'first-name': 'John' };

/* CONCLUSION

In JavaScript, the most commonly used naming conventions 
are camelCase for variables and functions, 
PascalCase for classes and constructor functions, 
and kebab-case for property or attribute names. 
It's important to adhere to these conventions for consistent and readable code. */
