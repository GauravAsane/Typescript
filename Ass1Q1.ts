//  Write a typescript program which contains one function named as Maximum. That function accepts
//three parameters and It should returns largest value from three Input parameters.

function Maximum(iNo1 : number , iNo2 : number , iNo3 : number) : number
{
    let iMax : number = 0

    if(iNo1 > iNo2)
    {
        iMax = iNo1
    }
    else
    {
        iMax = iNo2
    }

    if(iNo3 > iMax)
    {
        iMax = iNo3 
    }
   
    return iMax
}
var iValue1 : number = 23
var iValue2 : number = 89
var iValue3 : number = 6

var iRet : number = 0

iRet = Maximum(iValue1 , iValue2 , iValue3)
console.log("Maximum number is : "+iRet)