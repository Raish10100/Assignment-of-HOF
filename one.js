/* The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay of 2 secound.The program should use a variable "input" storing a string
as input and then implement a delay of 2 seconds before reversing the String.The reversed string should then be printed as output.*/


var input = "Hi , Hello"

setTimeout(() => console.log(input.split('').reverse().join('')), 2000);