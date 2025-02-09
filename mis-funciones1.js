
/*  
Using ES module syntax (export), 
which is a more modern approach introduced in Node.js v14 and later.
*/





// CommonJS Syntax => exports.functionName = function() { }
// ES Module Syntax => export function functionName() { }


/*  
 a. First Function: no return, just accepting a text as an input with two or three 
 parameter/arguments and print it by concatenating it with labels/other text.
*/

              //this function will print a product details like ProductName and price.
              export function showProductDetails(productName, price) {
                  const prefix = "Product Details:";
                  console.log(prefix);
                  console.log(`Product: ${productName}`);
                  console.log(`Price: $${price}`);
                }

  /*  
 b. Second Function: return a double value for converting a measurement unit to another one, it can accept a
double single value as parameter for the initial measurement unit.

*/


              // Function to convert centimeters to inches
              export function centimetersToInches(centimeters) {
                
                const  InchesXCentimeter = 0.393701; 
                return centimeters * InchesXCentimeter;
              }

              // Function to convert inches to centimeters
              export function inchesToCentimeters(inches) {
                const  CentimetersXInch = 2.54; 
                return inches * CentimetersXInch;
              }

 /* 
 c. Third Function: to do any math operation against a numeric value(s), it can accept one,
  or more than one value (argument), up to you, and then return the result of applying a math formula.
  */ 

                // Function to calculate Body Mass Index (BMI)
              export function calculateBMI(weightKg, heightM) {
                //Handle a possible error if they enter 0
                if (weightKg <= 0 || heightM <= 0) {
                  console.log( "Try again: Weight and height must be Positive Numbers.");
                }

                const bmi = weightKg / (heightM * heightM);
              return bmi;
              }

// d. Fourth Function: any advanced function of your choice

              export function myNewPassword(length) {
                //string with all the options that can be included in the password
                const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-`~[]\{}|;':\",./<>?";
                //empy string that will store the new password
                let password = "";
                for (let i = 0; i < length; i++) {

                  password += characters.charAt(Math.floor(Math.random() * characters.length));
                }
                return password;
              }
              

              /*
              
              console.log(Math.random()); 
              console.log(Math.random()); 
              console.log(Math.random());
              */