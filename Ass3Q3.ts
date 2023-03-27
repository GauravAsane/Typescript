/*   Create one typescript application which conta ins one class named as CircleX which sill
     inherits above Circle class. 
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

    class CircleX extends Circle
    {
        constructor(rad : number)
        {
            super(rad);
        }
        

        Circumference()
        {
            let Ans : number = 0;

            Ans =  2 * this.PI * this.Radius;
            return Ans;
        }
    }
var Ret = 0;

var obj1 = new CircleX(10.5);
Ret = obj1.Area()
console.log("Area of Circle of obj1  is : "+Ret);

Ret = obj1.Circumference()
console.log("Circumference of Circle of obj1  is : "+Ret);

console.log("-----------------------------------------------------")

var obj2 = new CircleX(10.7);

Ret = obj2.Area()
console.log("Area of Circle of obj2 is : "+Ret);

Ret = obj2.Circumference()
console.log("Circumference of Circle of obj1  is : "+Ret);