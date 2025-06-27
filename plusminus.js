'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' f=unction below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    // Write your code here
    const len= arr.length
    let plusFraction:number=0;
    let minusFraction:number=0;
    let zeroFraction:number=0;
    for(let i of arr){
        if(i==0) {zeroFraction=zeroFraction+1}
        if(i>0) {plusFraction=plusFraction+1}
        if(i<0) {minusFraction=minusFraction+1}
    }
     console.log((plusFraction/len).toFixed(6))
      console.log((minusFraction/len).toFixed(6))
    console.log((zeroFraction/len).toFixed(6))
   
   

}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
