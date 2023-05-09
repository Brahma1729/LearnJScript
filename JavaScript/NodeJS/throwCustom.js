function CheckNum(num)
{
    if (num<0){
        //throw new RangeError ("Enter the number greater than 0")

        throw "number shold be >0"
    }
    return num
}

CheckNum(-10)