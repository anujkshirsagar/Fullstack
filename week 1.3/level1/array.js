//we will learn how to push the number inthe array and many operations like pop,add the number in begining ,pop the number in the beginningetc.
//push operation in array
const hanuman=[1,2,3,4];
console.log(hanuman.push(5));
console.log(hanuman);

//pop operation
const anuj=[1,2,3,4];
console.log(anuj.pop());
console.log(anuj);

//shift operation to delete starting integer
const crystal=[1,2,3,4];
console.log(crystal.shift());
console.log(crystal);

//unshift operation for add the ineteger at the start
const platinum=[1,2,3,4];
console.log(platinum.unshift(0));
console.log(platinum);

//concat to add to arrays one after the another
const concatarray=[1,2,3,4];
const concat2array=[5,6,7,8];
console.log(concatarray.concat(concat2array));

//for each used as a callback
array1=[1,2,3,4];

function malanahimahit(str)
{
    console.log(str+"is the string");

}
array1.forEach(malanahimahit); 