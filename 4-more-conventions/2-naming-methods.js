/* NAMING CONVENTION FOR METHODS

Although there are some differences, the structure of a JavaScript function 
and a method are pretty similar. So, naming convention rules are the same.

We must use camel case to declare JavaScript methods 
and use verbs as prefixes to make names more meaningful. */

// Example

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    startEngine() {
        // Start the car's engine
    }

    drive(speed) {
        // Drive the car at the specified speed
    }

    stop() {
        // Stop the car
    }

    honkHorn() {
        // Activate the car's horn
    }
}

const myCar = new Car('Toyota', 'Camry');
myCar.startEngine();
myCar.drive(60);
myCar.stop();
myCar.honkHorn();


/*
In the example above, the Car class has several methods, 
each named using camel case and a verb as a prefix to indicate its action. 
We have startEngine(), drive(speed), stop(), and honkHorn() methods, 
which correspond to the respective actions of starting the car's engine, 
driving the car at a specified speed, stopping the car, and activating the car's horn.

By following this naming convention, the methods become more descriptive 
and self-explanatory, making it easier for other developers to understand their purpose and usage.
*/
