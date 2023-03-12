 /*Write a typescript program which contains one function named as Area. That function should
calculate area of circle. Accept value of radius from user and return its area. Default value of PI
should be 3.14 if it is not provided by the caller.
Input : 5
Output : */

function CalculateArea(radius : number , PI : number = 3.14) : number
{
    let Ans : number = 0

    Ans = PI * radius * radius

    return Ans
}

var Radius : number = 5
var Area : number = 0

Area = CalculateArea(Radius)
console.log("Area of Circle is : "+Area)