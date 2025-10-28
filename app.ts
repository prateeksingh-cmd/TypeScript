// console.log("hello")
//  Bsic I/o and Controll Flow
// q1
import * as readlineSync from 'readline-sync';
// let a:string = readlineSync.question("Enter first number: ");
// let p:number= Number(a);
// let b:string = readlineSync.question("Enter second number: ");
// let q:number= Number(b);
// console.log( " the sum is: " + (p+q));

// q2
// let a:string= readlineSync.question("Enter first Number: ");
// let p:number = Number(a)
// let b:string= readlineSync.question("Enter first Number: ");
// let q:number = Number(b)
// let c:string= readlineSync.question("Enter first Number: ");
// let r:number = Number(c)
// let largest:number= Math.max(p,q,r)
// console.log("The largest Number is:" + largest)

// q3
// let a:string= readlineSync.question("Enter a number: ");
// let p: number= Number(a)
// if (p%2===0)
//     console.log("Number is Even")
// else{
//     console.log("Number is odd")
// }
//  q4
// let a:string= readlineSync.question("Enter Year: ")
// let p:number= Number(a)
// if ( p%4===0){
//     console.log("Year is Leap Year")
// }
// else{
//     console.log("year is  not leap year")
// }

//  q5
//  let a:string=readlineSync.question("Enter a number for table countimg: ");
//  let p: number= Number(a)
//  console.log("Table for number is: ")
//  for ( let i=1; i<11;i++ ){
//     console.log( (i*p))
//  }

//  6

// let a:string=readlineSync.question("Enter the number for factorial: ")
// let p:number= Number(a)
// let f=1
// for ( let i=1; i<=p; i++) {
//     f *=i
    
    
// }
// console.log(f)

// q7

// let a:string= readlineSync.question("Enter a number: ")
// let n:number= Number(a)

// function Fibonacy(n:number):number {
//     if (n<=1){
//         return n
//     }
//     else {
//         return Fibonacy(n-1) + Fibonacy(n-2)
//     }

// }
// console.log("Fibonancy of that number is: ")
// console.log(Fibonacy(n))

// q8

// let a: string = readlineSync.question("Enter a number: ");
// let reversed: string = a.split("").reverse().join("");
// console.log(reversed)

// q9
// let a:string= readlineSync.question("Enter a number: ")
// for( let i=0;i<a.length;i++){
//     if (a[i] != "0"){
//         let digits= a.length;
//         console.log(digits)
//     }
//     else {

//     }
// }

// q10
// let a:string= readlineSync.question("Enter a number: ")
// let reverse:string= a.split("").reverse().join("")
// if ( a=== reverse){
//     console.log("Number is palindrome!")
// }
// else{
//     console.log(" Number is not palindrome")
// }

// ___________________________________________________________________________________________________________
//  operators and loop
// q11

// let a: string = readlineSync.question("Enter a number: ");
// let num: number = Number(a);
// let sum: number = 0;
// while (num > 0) {
//   sum += num % 10;  
//   num = Math.floor(num / 10);  
// }
// console.log("Sum of digits =", sum);

// q21

// let arr:number[]=[1,2,3,4,5,6,7,8,9,10]
// let max_num: number=0
// for ( let i=0; i< arr.length;i++){
//     max_num= Math.max(max_num, arr[i])
// }
// console.log(max_num)

// q22

// let arr:number[]=[1,2,3,4,5,6,7,8,9,10]
// let total_sum=arr[0]
// for ( let i=1; i<arr.length; i++) {
//     total_sum += arr[i]
// }
// console.log(total_sum/ arr.length)
// Q23
// let arr:number[]=[1,2,3,4,5,6,7,8,9,10]
// for ( let i=0; i< arr.length-1; i++) {
//     if (arr[i] < arr[i+1]) {
//         arr[i], arr[i+1]= arr[i+1], arr[i]
//     }
    
// }
//  console.log(arr)

// q24

// let arr:number[]=[1,2,3,4,5,6,7,8,9,10]
// let count_even=0
// let count_odd=0
// for ( let i=0; i<arr.length; i++) {
//     if (arr[i]%2===0) {
//         count_even +=1
//     }
//     else {
//         count_odd +=1
//     }
// }
// console.log( count_even,count_odd)

// q25

// let arr:number[]=[1,2,3,4,5,6,7,8,9,10]
// let target_num=4
// for ( let i=0; i<arr.length; i++) {
//     if (arr[i]=== target_num) {
//         console.log(i)
//     }
// }

//  q29
// let arr:number[]=[1,2,3,4,5,6,7,8,9,10]
// for ( let i=0; i< arr.length-1; i++) {
//     if ( arr[i]=== arr[i+1]) {
//         arr.pop(arr[i+1])
//     }
// }
// console.log(arr)

// q30
// let arr:number[]=[1,2,3,4,5,6,7,8,9,10]
// //  first we will sort the array then indices of maax-

// function getSecondLargest(arr:number[]):number {
//     let n = arr.length;

//     let largest = -1, secondLargest = -1;


//     for (let i = 0; i < n; i++) {
//         if (arr[i] > largest)
//             largest = arr[i];
//     }


//     for (let i = 0; i < n; i++) {
        
//         if (arr[i] > secondLargest && arr[i] !== largest) {
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
// }
// console.log(getSecondLargest(arr));

// q40

// let vowel:string[]=['a','e','i','o','u','A','E','I','O','U']
// let count=0
// let word= " hello"
// for ( let i=0; i<word.length; i++) {
//     for (let j=0; j<vowel.length;j++){

    
//     if ( word[i] === vowel[j]){
//         count +=1
//     }
// }
// } console.log(count)
// 
// q36

// function swap(a: { value: number }, b: { value: number }) {
//   let temp = a.value;
//   a.value = b.value;
//   b.value = temp;
// }

// let num1 = { value: Number(readlineSync.question("Enter first number: ")) };
// let num2 = { value: Number(readlineSync.question("Enter second number: ")) };

// console.log(` num1 = ${num1.value}, num2 = ${num2.value}`);
// swap(num1, num2);
// console.log(`After swap num1 = ${num1.value}, num2 = ${num2.value}`);
//  q 18

// let a:string= readlineSync.question(" Enter a number: a ")
// let p:number= Number(a)
// let b:string= readlineSync.question(" Enter a number: b ")
// let q:number= Number(b)
// let res= p**q
// console.log("The a poerw b is:" + res )

// // q17
// let a:string= readlineSync.question("Enter Temprature in farenheit: ")
// let p:number= Number(a)
// let res= 5/9*(p-32)
// console.log( " the temp in celcius: " + res )

// q31
// function factorial(a:number):number {
//     if ( a <=1 ){
//         return a
//     }
//     else{
//         return a*factorial(a-1)
//     }
    
// }
// console.log(factorial(6))

// q32
// function nthFibonaccy(n:number):number {
//     if ( n<=1) {
//         return n
//     }
//     else {
//         return nthFibonaccy(n-1) + nthFibonaccy(n-2)
//     }
        
// }
// console.log(nthFibonaccy(7))
//  


// q34

// function powernum(a:number, b:number):number {
//     if (b===0) {
//         return 1

//     }
//     else {
//         return a*powernum(a,b-1)
//     }
// }
// console.log(powernum(2,10))

//  q36
// let arr:number[]=[3,4]
// function swap(arr:number[]):void {
//     let temp= arr[0]
//     arr[0]= arr[1]
//     arr[1]= temp
   
// }
// swap(arr)
// console.log(arr)

// q38

// function copyThat(s: string): string {
//   let r = "";
//   for (let i = 0; i < s.length; i++) {
//     r += s[i]; 
//   }
//   return r;
// }

// let s = "kya hua bhai";
// let res = copyThat(s);

// console.log(res); 








 

















