
# Lab-Assignment#2 (Beta 2.0)–Node.JS & Modules





# Node.js File Reader

This repository contains a JavaScript module (`mis-funciones1.js`) with several functions, along with an example script (`script1.js`) demonstrating how to use them.


## Features

The module provides the following functions:

*   **`showProductDetails(productName, price)`:** Prints product details (name and price) to the console.
*   **`centimetersToInches(centimeters)`:** Converts centimeters to inches.
*   **`inchesToCentimeters(inches)`:** Converts inches to centimeters.
*   **`calculateBMI(weightKg, heightM)`:** Calculates Body Mass Index (BMI) given weight in kilograms and height in meters.  Handles invalid input (zero or negative weight/height).
*   **`myNewPassword(length)`:** Generates a random password of a specified length.




## Usage/Examples

**Import:** Import the functions you need into your script using ES6 modules:

    ```javascript
    import * as misFunciones1 from './mis-funciones1.js'; // Import all functions
    // Or import individual functions:
    // import { centimetersToInches, inchesToCentimeters } from './mis-funciones1.js';
    ```

2.  **Call functions:** Use the imported functions in your script:

    ```javascript
    misFunciones1.showProductDetails("T-Shirt GOD FIRST BRO", 19.99);

    const lengthInInches = misFunciones1.centimetersToInches(55);
    console.log(`${55} cm is equal to ${lengthInInches} inches.`);

    const bmi = misFunciones1.calculateBMI(100, 1.75);
    console.log(`Your BMI is: ${bmi.toFixed(2)}`);

    const newPassword = misFunciones1.myNewPassword(12);
    console.log("My New Password is:", newPassword);
    ```

    See `script1.js` for more examples.
## Files

*  **`mis-funciones1.js`:** The JavaScript module containing the functions.
*   **`script1.js`:** An example script demonstrating how to use the module.
## Badges



[![Javascript Lenguage](https://img.shields.io/badge/Lenguage-Javascript-gold)](https://choosealicense.com/licenses/mit/)

[![Node js Lenguage](https://img.shields.io/badge/Lenguage-Node_JS-green)](https://choosealicense.com/licenses/mit/)


## Author

- [@luiscsepulveda](https://github.com/luiscsepulveda)

