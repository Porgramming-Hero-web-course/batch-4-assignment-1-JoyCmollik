/*
Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

// Sample Input:
sumArray([1, 2, 3, 4, 5]);

// Sample Output:
15;
*/

const sumArray = (listOfNumbers: number[]) : number => {
    let finalNumber: number = 0;

    for (let i = 0; i < listOfNumbers.length; i++ ) {
        finalNumber += listOfNumbers[i];
    }

    return finalNumber;
}