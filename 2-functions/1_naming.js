/* NAMING FUNCTIONS

When choosing function names, it is worth using verbs that clearly 
describe the action performed by the function. Also try to be consistent 
in naming to make the code easier to read and understand its functions.
If the function performs more specific actions, you may want to consider 
adding additional details to the name to more precisely describe what it does. */

/* Use verbs */

// Function saves a new password.
const saveNewPassword = () => { };
// Function fetches articles.
const fetchArticles = () => { };
// Function checks if a given number is even.
const isEven = () => { };

/* Consistent */

// Function retrieves comments.
const getComments = () => { };
// Function retrieves articles.
const getArticles = () => { };
// Function retrieves a category.
const retrieveCategory = () => { };


/* Details */

// Function that changes the password.
const changePassword = () => { };
// Function that fetches articles by category ID.
const fetchArticlesByCategoryId = () => { };

/* EXAMPLES OF BAD NAMES

save:
* Description: It is unclear what specific data is being saved.
* Evaluation: The name is too generic and lacks specificity. 
It would be better to provide more context or details about what is being saved. 
Consider using a more descriptive name that indicates what type of data or object is being saved.
*/

const save = () => { };

/*
load:

* Description: Indicates the function relates to loading data.
* Evaluation: The name is quite generic and doesn't specify what data is being loaded or from where. 
It would be better to provide more context or specify the source or type of data being loaded.
*/

const load = () => { };


/* CONCLUSION

In summary, "save" and "load" would benefit from more specific and descriptive names 
that convey the type of data being saved or loaded. Consider using verbs that 
describe the actions performed by the functions to make their purposes clearer.
*/
