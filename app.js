//1
function addNum(num1, num2) {
    return num1 + num2;
  }
  addition = addNum(7, 4);
 console.log(addition);

//2
function timeC(minute){
    convert = minute*60
    return convert
}
console.log(timeC(6))

//3
function nextNum(num){
    frwd =num+1;
    return frwd;
}
console.log(nextNum(57))

//4
function triangleArea(B,H){
    area =0.5*B*H;
    return area
}
console.log(triangleArea(9,6))

//
arr =[10,9,8,7,6,5,4]
function getFirstValue(arr){
    if (Array.isArray(arr) && arr.length>0);
    return arr[0];
}
console.log(getFirstValue(arr))

// //6
// age = parseInt(prompt("Enter a positive number : "))

// function calcAge(age){
//     if(age >=0){
//         ageD =age*365;
//         return ageD;
//     }
//     else{
//         return "Invalid"
//     }
// }
// console.log(calcAge(age))

//7
function circuit(V,C){

    power =V*C
    return power
}
console.log(circuit(30,40))

//8
function Edge(firstEdge,secondEdge){
    if (firstEdge >0 && secondEdge>0)
        {thirdEdge =(firstEdge + secondEdge)-1
        return thirdEdge
    }
    else{
        return "Invalid"
    }
    
}
console.log(Edge(9,2))

//9
function remaimder(V,C){

    re =V%C
    return re
}
console.log(remaimder(3,4))

//10
function givesomething(x){
    return "Something " +x;

}
console.log(givesomething("Bob Jane"))

//11
function squared(V){

    re =V*V
    return re
}
console.log(squared(5))

//12
function Edge(num){
    if (num>=0){
        return "false"
    }
    else{
        return "true"
    }
    
}
console.log(Edge(9))

//13

function sumPolygon(V){

    if (V>2){
        don =(V-2)*180
        return don
    }
    else{
        return "NULL"
    }
       
}
console.log(sumPolygon(3))

//14
function givesomething(x){
    return x+" Coder" ;

}
console.log(givesomething("JavaScript"))

//15
function NUM(V,num2){
    if (V+num2<100){
        return "true"
    }
    else{
        return "false"
    }
    
}
console.log(NUM(99,30))


