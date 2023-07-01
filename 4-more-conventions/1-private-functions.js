/* NAMING CONVENTION FOR DENOTING PRIVATE FUNCTIONS

Underscores ( _ ) are widely used in languages like MySQL and PHP 
to define variables, functions, and methods. But in JavaScript, an underscore 
is used to denote private variables or functions.

For example, if you have a private function name like toonName, 
you can denote it as a private function by adding an underscore as a prefix (_toonName). */

class DogCartoon {
    constructor(dogName, ownerName) {
        this.dogName = dogName;
        this.ownerName = ownerName;
        this.name = _toonName(dogName, ownerName);
    }
    _toonName(dogName, ownerName) {
        return `${dogName} ${ownerName}`;
    }
}

let cartoon = new DodCartoon('Scooby-Doo', 'Shaggy');

// good
let characterName = cartoon.name;
console.log(characterName);
// "Scooby-Doo Shaggy" 

// bad
characterName = cartoon._toonName(cartoon.dogName, cartoon.ownerName);
console.log(characterName);
  // "Scooby-Doo Shaggy"