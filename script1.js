/*
The traditional/classical way to import a module in Node.js is to use the "require" function:
- COMMON JS (CommonJS) => using the "require()" syntax

Node.js (version 14 and later) added support for "ES MODULES":
- ES MODULES (ES module) => using "import/export" syntax

Most Node.js applications are written in vanilla JavaScript and still use "require".
*/


// Creating a variable for receiving the contents from the file "my-module1.js"
// Below we are importing all the content of "my-module1.js" into this variable myModule1:
// const myModule1 = require('./functions.js');

// Importing a specific function from "my-module2.js"
//const { isPassed } = require('./my-module2');


// Alternatively, using this ES6 syntax:
// import myModule1, { checkEvenOdd, province } from './my-module1';


// Importing the entire module object from my-module2.js
import * as misFunciones1 from './mis-funciones1.js';



//a. 

        misFunciones1.showProductDetails("T-Shirt GOD FIRST BRO", 19.99)
        misFunciones1.showProductDetails("Vinyl Pink Floyd", 69.99)

//b.  if you want to import only the function -
        //  import { centimetersToInches, inchesToCentimeters } from './mis-funciones1.js';

        // Convert centimeters to inches:
        const lengthInCm = 55;
        const lengthInInches = misFunciones1.centimetersToInches(lengthInCm);
        console.log(`${lengthInCm} cm is equal to ${lengthInInches} inches.`);

        // Convert inches to centimeters:
        const lengthInInches2 = 40;
        const lengthInCm2 = misFunciones1.inchesToCentimeters(lengthInInches2);
        console.log(`${lengthInInches2} inches is equal to ${lengthInCm2} cm.`);

//c. 

        const weightKg = 100; // Weight in kilograms
        const heightM = 1.75; // Height in meters

        //remember to import every time you want to use a function in other module or you will get 
        //ReferenceError: calculateBMI is not defined
        const bmi = misFunciones1.calculateBMI(weightKg, heightM); 
        

        // Check if the input was valid (bmi is a number)
        if (typeof bmi === 'number') { 
               // Display the final BMI, rounded and convert to number
            const yourBmi = parseFloat(bmi.toFixed(2));
         
        console.log(`and Your BMI is: ${yourBmi}`); // in order for to fixed works needs to be with parseFloat()
      
            
        // Interpretation (you can add this directly here if you don't want a separate function):
        let interpretation = "";
        if (bmi < 18.5) {
            interpretation = "Underweight";
        } else if (bmi < 25) {
            interpretation = "Normal weight";
        } else if (bmi < 30) {
            interpretation = "Overweight";
        } else {
            interpretation = "Obese";
        }
        console.log(`Category: ${interpretation}`);

        } else {
            // Display the error message if input was invalid
        console.log(bmi); 
        }


//d. create a new password 

            //lenght new password
                const passwordLength = 12; 

                const newPassword = misFunciones1.myNewPassword(passwordLength);
            
                console.log("My New Password is:", newPassword);