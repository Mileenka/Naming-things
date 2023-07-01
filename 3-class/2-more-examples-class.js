// First example
class DogCartoon {
    constructor(dogName, ownerName) {
        this.dogName = dogName;
        this.ownerName = ownerName;
    }
}

let cartoon = new DogCartoon('Scooby-Doo', 'Shaggy');

// Second example
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    startEngine() {
        // Start the car's engine
    }

    drive() {
        // Drive the car
    }

    stop() {
        // Stop the car
    }
}

// Third example
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    login() {
        // Log in the user
    }

    logout() {
        // Log out the user
    }

    resetPassword() {
        // Reset the user's password
    }
}

// Fourth example
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    displayInfo() {
        // Display information about the book
    }

    borrow() {
        // Borrow the book
    }

    returnBook() {
        // Return the borrowed book
    }
}

/* In these examples, the classes are descriptively named according to 
a naming convention to help you understand their purpose and functionality. 
The Car, User, and Book classes have constructors and methods that perform 
various operations related to their context. */
