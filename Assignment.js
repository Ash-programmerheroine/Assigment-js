//1st solution

function feetToMile(ft){
   if(ft > 0){
    const mile = ft / 5280;
    return mile;
   }
   else{
       return "Length must be greater zero.";
   }
    
}
var userFt = feetToMile(10500)
console.log(userFt)


//2nd solution

function woodCalculator(chair,table,khat){
   var cFt =(chair * 1) + (table * 3) + (khat * 5);
   return cFt;
}
var needWood = woodCalculator(12,12,12)
console.log(needWood)



//3rd solution

function brickCalcultator(floor){

    if(floor >= 1 && floor <=10 ){
        var brickNeed1stTen = 1000 * 15;
        return brickNeed1stTen;
    }
    else if(floor > 10 && floor <= 20){
        var brickNeed2ndTen = 1000 * 12;
        return brickNeed2ndTen;
    }
    else if(floor > 20 ){
        var brickNeedLeft = 1000 * 10;
        return brickNeedLeft;
    }
    else{
        return "Floor input must be > 0."
    }
    
}
var inputFloor = brickCalcultator(20)
console.log(inputFloor)



//4th solution

function tinyFriend(arr){
    var tiny = arr[0];
    for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
        if( tiny.length > element.length){
            tiny = element
        }
    }
return tiny;
}

var  friend = ["abir","abdullah","robin","abdurrohim","ali"]
var smallFriend = tinyFriend(friend)
console.log(smallFriend)
  

