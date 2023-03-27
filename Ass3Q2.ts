/*  Create one typescript application....which contains one class named as Circle.
    Circle class contains two characteristics (Class data members) as Radius, Pl.
    Create one parametrised constructor which accept one value and assign it to Radius. Value of
    PI member is set to 3.14.  
 */

    class Circle
    {
        Radius;
        PI ;
        
        constructor(No1 , No2 = 3.14)
        {
            this.Radius = No1 ;
            this.PI = No2;
        }



        Area() : number
        {
            let Ans : number = 0;

            Ans = this.PI * this.Radius * this.Radius
            return Ans;
        }
    }
var Ret = 0;

var obj1 = new Circle(10.5);
Ret = obj1.Area()
console.log("Area of Circle of obj1  is : "+Ret);

console.log("-----------------------------------------------------")

var obj2 = new Circle(10.5,3.19);
Ret = obj2.Area()
console.log("Area of Circle of obj2 is : "+Ret);