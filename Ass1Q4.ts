/* Write a typescript program which contains one function named as ChkPrime. That function should
accept one number and it shouldfitum true1ttiie-given number is prime and otherwise return false.
Input : 11
Output : It is prime number*/

function CheckPrime(iNo : number) : boolean
{
    let iCnt : number = 0
    
    
    for(iCnt = 2 ; iCnt <= iNo / 2 ; iCnt++)
    {
        if(iNo % iCnt == 0)
        {
            return true
            break
        }
        
    }
    return false
}
var iValue : number = 11
var bRet : boolean = false

 bRet = CheckPrime(iValue)

 if(bRet == true)
 {
    console.log(iValue+" is Not Prime Number")
 }
 else
 {
    console.log(iValue+" is Prime Number") 
 }