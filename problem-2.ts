/*
Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

// Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// Sample Output:
[1, 2, 3, 4, 5]
*/

const removeDuplicates = (listOfNumbers: number[]): number[] => {
    const resultArray: number[] = [];

    const numberDict: { [key: number]: boolean } = {};

    listOfNumbers.forEach((iteratedNumber: number) => {
        if(!numberDict[iteratedNumber]) {
           resultArray.push(iteratedNumber) 
           numberDict[iteratedNumber] = true;
        }
    })

    return resultArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));