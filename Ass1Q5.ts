/* Write a typescript program which contains one function named as Fibonacci. That function accept
one number from user and print Fibonacci series ti ll that number.
Input : 21
Output :  1  1   2   3   5   8   13  21
 */

function Fibonacci(iNo : number) : void
{
    let iCnt : number = 0
    let First : number = 0
    let Second : number = 1
    let temp : number = 0

    while(iCnt <= iNo)
    {
       
        console.log(Second)
        iCnt = First + Second
        temp = Second
        Second = First + Second
        First = temp    
         
    }
    
}
var iValue : number = 21

 Fibonacci(iValue)

