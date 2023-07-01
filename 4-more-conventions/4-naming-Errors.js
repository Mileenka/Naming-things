/* NAMING ERRORS OR EXCEPTIONS IN JAVASCRIPT 

It's important to choose descriptive names that accurately convey 
the nature of the error. This helps in understanding and debugging 
the code when an error occurs. Here are some guidelines for naming errors:

* Use descriptive names that clearly indicate the type or cause of the error.
* Use camel case or snake case for error names.
* Prefix the error name with "Error" or "Exception" to explicitly indicate that it is an error object.
* Be specific and concise in naming the error to provide helpful information about the problem. */

// Example

// Custom error class example
class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DatabaseError';
    }
}

// Custom error instance
const databaseConnectionError = new DatabaseError('Failed to establish database connection');

/*
In the example above, we define a custom error class DatabaseError 
that extends the built-in Error class. We give it a descriptive name 
that indicates it's related to database errors. When throwing this error, 
we provide a specific error message.

By following these naming conventions, your errors will provide 
meaningful information about the problem, making it easier to identify 
and handle them in your code.
 
*/
