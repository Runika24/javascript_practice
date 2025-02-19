/* Write a function named process Numbers that accepts two numbers and a callback function as parameters. Inside processNumbers ,
*return the result of invoking the callback with the two numbers. Next, call processNumbers with the numbers 3 and 4,
*passing an anonymous function that returns the sum of these numbers. Store thereturned value in a variable and log
*it with a descriptive message (e.g., What output should be printed to the console when the code is executed?
  */

function processnumber(num1,num2,callback){
    return callback(num1,num2)
}
var result= processnumber(3,4,function (x,y){
    console.log(x +y);
    return x+y;
});
console.log("the sum of 3 and 4 is:",result);

/*Create a function called Inside greet that takes a single parameter—a callback function.greet ,
 call the callback with the string the callback's result. Then, invoke  "Alice" as its argument and return
 greet by passing an anonymous function thataccepts a parameter (e.g., name ) and returns a greeting in the format 
"Hello,[name]!" . Store the result in a variable and log it. What output will appear in theconsole? */

function greet(callback)
{
    return callback("Alice")
}
var result =greet(function(name)
{
    return "Hello," + "" + name
})
console.log("the result is",result)

/*Define a function named calculate that takes three parameters: two numbers and a callback function 
representing an operation to perform on these numbers. Withincalculate , return the result of calling 
the callback with the two numbers. Next, call calculate with the numbers 10 and 5, and pass an arrow
 function as the callback that subtracts the second number from the first. Log the result with an appropriate
 message (e.g., "Difference:" ). What is the expected output when the code is executed? */

function calculate(i, j, callback){
    return callback(i, j);
}
var result = calculate(10, 5, function(x, y) {
    return x - y;
})
console.log("The Difference is: " + result)
