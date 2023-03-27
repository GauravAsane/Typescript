/*write a typescript program which contains one function named as ChkString . that function accepts one String and check whether that String contains "Marvellous" word or not */

function ChkString(str1 : string , str2 : string) : boolean
{
    let Cnt : number = 0
    let Cnt1 : number = 0
    let temp : string[] = str1.split(' '); 

    for(Cnt = 0 ; Cnt < temp.length; Cnt++)
    {
        if(temp[Cnt] == str2 )
        {
            return true;
            break;
            
        }
    }
    return false;
   
}


var iValue1 : string = "Pune Kothrud Marvellous Infosystems"
var iValue2 : string = "Marvellous";
var bRet : boolean = false

bRet = ChkString(iValue1 , iValue2)
if(bRet == true)
{
    console.log("String have "+iValue2+" Word in it")
}
else
{
    console.log("String dont have '"+iValue2+"' Word in it")
}


