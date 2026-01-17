
function printFunc( name) {
 console.log("Hello,", name);
}

const helloName = name => console.log("Hello,", name);

function evenOdd( num) {
    if( num % 2 == 0)
        return "EVEN";
    return "ODD";
}
const even = num => {
    if( num % 2 == 0)
        return "EVEN";
    return "ODD";
};

function squareCalc(num){
    return num*num;
}
const sqCalc = num => num *num;

function celToFahe (temp) {
    return (temp * (9/5) + 32);
}
const fah = temp => (temp * (9/5) + 32);

function largestOf3 (list) {
    let lar = list[0];
    for (i=0; i < list.length; i++){
        let a = list[i];
        if (lar < a) {
            lar = a
        }
    }
    return lar;
}

const largestNum = num => {
     let lar = list[0];
    for (i=0; i < list.length; i++){
        let a = list[i];
        if (lar < a) {
            lar = a
        }
    }
    return lar;
};

function sumOfNatural (list) {
    let sum = 0;
    for (i=0; i < list.length; i++){
        sum += list[i];
    }
    return sum;
}


const sumOfNat = num => {
    let sum = 0;
    for (i=0; i < list.length; i++){
        sum += list[i];
    }
    return sum;
};





// let arr = [5, 2 , 1];
// // let arr1 = [0, 4 , 5];
// // let arr2 = [3, 4 , 5];
// console.log(arr);
// //console.log(sumOfNatural(arr) );
// // console.log(largestOf3(arr1) );
// // console.log(largestOf3(arr2) );