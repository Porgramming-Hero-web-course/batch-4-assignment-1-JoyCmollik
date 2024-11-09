/*
Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

Example:

Input: "I love typescript", "typescript"
Output: 1
// Sample Input:
countWordOccurrences("I love typescript", "typescript");

// Sample Output:
1;
*/

const countWordOccurrences = (sentence: string, word: string): number => {
    let wordOccurrenceCnt: number = 0;

    if(sentence.length === 0 || word.length === 0) return wordOccurrenceCnt;
    if(sentence.indexOf(word) === -1) return wordOccurrenceCnt;

    const lcSentence: string = sentence.toLowerCase();
    const lcWord:string = word.toLowerCase();

    const wordsList:string[] = lcSentence.split(" ");

    wordOccurrenceCnt = wordsList.reduce((acc: number, currWord: string): number => {
        if(currWord === word) return acc++;
        else return acc;
    }, 0)

    return wordOccurrenceCnt;
}

countWordOccurrences("I love typescript", "typescript");