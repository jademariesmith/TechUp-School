// CHALLENGE #3

// Test data:
// Mark Miller and John Smith
// Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// 1. create objects for each person with properties for full name, mass, and height

// 2. create calcBMI method on each object to calculate BMI and save value to a property and return it from the method

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    // return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    // return this.bmi;
  },
};

// 3. log to console who has the highest BMI, and the respective BMI: John's BMI (28.3) is higher than Mark's (23.9)!

// console.log(mark.calcBMI());
// console.log(john.calcBMI());

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`
  );
} else if (mark.bmi < john.bmi) {
  console.log(
    `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})!`
  );
} else {
  console.log("BMIs are the same!");
}
