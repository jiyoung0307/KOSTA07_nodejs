let student = {
    name :"홍길동",
    score : 90
}

let {name, score} = student;
console.log(name + "," + score);
let student1 = {...student};
let student2 = student;
console.log("student == student1 ? " + (student == student1));
console.log("student == student2 ? " + (student == student2));
let student3 = {...student,address:"주소",name:"김연아"};
console.log("student = " + student.name);
console.log("student3 = " + student3.name);
let array = [1,2,3,4,5];

// let a = array[0];
// let b = array[1];

let [a,b,...rest] = array;

console.log(a+b);
console.log(rest);

let arr1 = [1,2];
let arr2 = [3,4];
//let arr3 = arr1.concat(arr2);
let arr3 = [...arr1,...arr2];
console.log(arr3);

let arr4 = [...arr3];
let arr5 = arr3;
console.log("arr3 == arr4 ? " + (arr3 == arr4));
console.log("arr3 == arr5 ? " + (arr3 == arr5));

let arr6 = [...arr3,5];
console.log(arr6);