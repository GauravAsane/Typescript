/* Create one typescript application which contains one class named as Arithmetic.
    Arithmetic class contains three characteristics (Class data members) as Numberl, Number2.
    Create one parametrised constructor which accept two values and assign it to Numberl and
    Number2. 
 */

    class Arithmetic
    {
        Number1;
        Number2;
        
        constructor(No1 , No2)
        {
            this.Number1 = No1;
            this.Number2 = No2;
        }

        Addition() : number
        {
            let Ans : number = 0;

            Ans = this.Number1 + this.Number2;

            return Ans;
        }

        Subtraction() : number
        {
            let Ans : number = 0;

            Ans = this.Number1 - this.Number2;

            return Ans;
        }

        Multiplication() : number
        {
            let Ans : number = 0;

            Ans = this.Number1 * this.Number2;

            return Ans;
        }

        Division() : number
        {
            let Ans : number = 0;

            Ans = this.Number1 / this.Number2;

            return Ans;
        }
    }

    var obj1 = new Arithmetic(11,10);

    var Ret = 0;

    Ret = obj1.Addition()
    console.log("Addition is : "+Ret);

    Ret = obj1.Subtraction()
    console.log("Subtraction is : "+Ret);

    Ret = obj1.Multiplication()
    console.log("Multiplication is : "+Ret);

    Ret = obj1.Division()
    console.log("Divsion is : "+Ret);

    console.log("-----------------------------------------------------")
    var obj2 = new Arithmetic(51,21);

    Ret = obj2.Addition()
    console.log("Addition is : "+Ret);

    Ret = obj2.Subtraction()
    console.log("Subtraction is : "+Ret);

    Ret = obj2.Multiplication()
    console.log("Multiplication is : "+Ret);

    Ret = obj2.Division()
    console.log("Divsion is : "+Ret);
