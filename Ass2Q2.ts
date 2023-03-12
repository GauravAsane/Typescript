/* write a typescript programs which accpets array of numbers and return Summation of number from Array
    Input   :   23  6   7   4   5   7
    Output  :   Addition is 52 */

function Summation(Nos : number[]) : number
{
    let iCnt : number = 0
    let Sum : number = 0

    for(iCnt = 0 ; iCnt < Nos.length ; iCnt++)
    {
        Sum = Sum + Nos[iCnt]
    }

    return Sum
}


var Arr : number[] = [23,6,7,4,5,7]

var iRet : number = 0

iRet = Summation(Arr)

console.log("Addition  is : "+iRet)

