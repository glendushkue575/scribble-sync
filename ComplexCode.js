/* 
   File Name: ComplexCode.js
   Description: A sophisticated and elaborate code snippet showcasing various JavaScript concepts and functionalities.
*/

// Importing modules
const axios = require('axios');
const moment = require('moment');
const { calculateAge, createPerson } = require('./helpers');

// Utility function to calculate factorial
function factorial(n) {
   if (n === 0 || n === 1) return 1;
   return n * factorial(n - 1);
}

// Class definition for a complex data structure
class ComplexDataStructure {
   constructor(data) {
      this.data = data;
      this.size = this.data.length;
   }

   // Method to perform an expensive calculation
   calculate() {
      let result = 0;
      for (let i = 0; i < this.size; i++) {
         result += Math.pow(this.data[i], i + 1);
      }
      return result;
   }

   // Method to sort the data
   sort() {
      return this.data.sort((a, b) => a - b);
   }
}

// Promisified API call function
function fetchData() {
   return new Promise((resolve, reject) => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response => resolve(response.data))
         .catch(error => reject(error));
   });
}

// Asynchronous function to perform complex operations
async function performComplexOperations() {
   try {
      const data = await fetchData();
      const modifiedData = data.map(obj => ({ ...obj, date: moment().format('YYYY-MM-DD') }));

      const complexDataStructure = new ComplexDataStructure(modifiedData);
      const calculationResult = complexDataStructure.calculate();
      const sortedData = complexDataStructure.sort();

      console.log('Calculation Result:', calculationResult);
      console.log('Sorted Data:', sortedData);

      const person = createPerson('John', 'Doe', 25);
      const age = calculateAge(person.dateOfBirth);

      console.log('Person:', person);
      console.log('Age:', age);
   } catch (error) {
      console.error('Error:', error.message);
   }
}

// Calling the main function
performComplexOperations();