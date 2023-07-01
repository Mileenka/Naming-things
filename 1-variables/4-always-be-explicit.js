/* BE-EXPLICIT

* By using more descriptive names like dayOfTheWeek instead of d in the forEach loop, 
it becomes easier to understand the purpose and usage of the variable.

* Explicit variable naming is especially important when the code 
becomes more complex or when other developers need to read and maintain the code. 

* It promotes code clarity and helps avoid potential confusion or errors 
caused by ambiguous or unclear variable names.

*/

const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];

// daysOfTheWeek.forEach(d => {
//     something(daysOfTheWeek)
//     /*
//      ...
//      ...
//      ...
//      ...
//      ...
//      ...
//      ...
//       */
//      somethingElse(d)
// });

daysOfTheWeek.forEach(dayOfTheWeek => {
    something(daysOfTheWeek);
    /*
     ...
     ...
     ...
     ...
     ...
     ...
     ...
      */
     somethingElse(dayOfTheWeek);
});

/* In this case Using i as the loop counter is a common convention, 
but consider using more descriptive variable names 
for improved code clarity and maintainability.
*/

for(let i = 0; i < 10; i++) {
    // Iteration logic here
}
