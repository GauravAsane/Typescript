/*write a typescript program which contains one arrow function named as ChkArmstrong . that function accepts one numbers and check whether number is armstrong number or not */

function ChkArmstrong(iNo : number) : boolean
{
    let temp = Math.floor(iNo);
    let Cnt : number = 0
    let Sum : number = 0
    let digit : number = 0
    let Add : number = 0;
    let Final : number = 0;
    let temp2 : number = 0;


    while((temp= Math.floor(temp)) > 0)
    {
        Cnt++;
        temp = temp / 10; 
    }
    temp = Math.floor(iNo);
    
    while((temp= Math.floor(temp)) > 0)
    {
        digit = temp % 10;
        temp2 = digit;
        for(let i : number = 1;  i < Cnt ; i++)
        {
            Sum =  temp2 * digit; 
            temp2 = Sum;
            
        } 
        Add = Add + Sum; 
        Sum = 0;
        temp = temp / 10;
    }  
    
    if(Add == iNo)
    {
        return true;
    }
    else
    {
        return false;
    }
}


var iValue : number = 153
var bRet : boolean = false
bRet = ChkArmstrong(iValue)
if(bRet == true)
{
    console.log(iValue+" is Armstrong Number");
}
else
{
    console.log(iValue+" is Not  Armstrong Number");
}

