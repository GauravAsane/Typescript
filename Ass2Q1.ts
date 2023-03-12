/* write a typescript programs which accpets array of numbers and return Largest number from Array
    Input   :   23  89  6   29  56  45  77  32
    Output  :   Maximum number is 89 */

function Maximum(Nos : number[]) : number
{
    let iCnt : number = 0
    let iMax : number = 0

    for(iCnt = 0 ; iCnt < Nos.length ; iCnt++)
    {
        if(Nos[iCnt] > iMax)
        {
            iMax = Nos[iCnt]
        }
    }

    return iMax
}


var Arr : number[] = [23,89,6,29,56,45,77,32]

var iRet : number = 0

iRet = Maximum(Arr)

console.log("Maximum Number is : "+iRet)

