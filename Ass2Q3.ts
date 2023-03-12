/* write a typescript programs which accpets array of numbers and return Summation of number from Array
    Input   :   23  89  6   29  56  45  77  32
    Output  :   Second Largest Number  is 77 */

function SecMax(Nos : number[]) : number
{
    let iCnt : number = 0
    let iMax1 : number = 0
    let iMax2 : number = 0

    for(iCnt = 0 ; iCnt < Nos.length ; iCnt++)
    {
        if(Nos[iCnt] > iMax1)
        {
            iMax2 = iMax1
            iMax1 = Nos[iCnt]
            
        }
        else if(Nos[iCnt] > iMax2)
        {
            iMax2 = Nos[iCnt]
        }
    }

    return iMax2
}


var Arr : number[] = [23,89,6,29,56,45,77,32]

var iRet : number = 0

iRet = SecMax(Arr)

console.log("Second Largest Number  is : "+iRet)

