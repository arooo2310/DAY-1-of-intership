console.log("welcome ");
a=8;
var a=8;
let g=true;
let b='aab';
let c;
console.log(typeof(g));
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
// JAVASCRIPT OBJECTS

let person={
    name:'Aromal',
    age:20,
    location: 'alappy'
}
console.log(person.name);
let arr=['aroo','mallll',2020]
console.log(arr[2]);
console.log(arr.length);
let arr_obj=[{age:22,location:'Alappy'},{age:24,location:'kochi'}]
// retrive location of the second object
console.log(arr_obj[1].location)
function add(a,b){
    var sum = a+b;
    return sum;
}
let result = add(20,30);
console.log(result);
var k= 1;
var l= ++k;
console.log(k);
console.log(l);
var a1=22;
var a2=32;
if(a1>a2){
    console.log('a1 is greater and value is '+a1);
}
else if(a1==a2){
    console.log('a1 and a2 are equal and the value is '+a1)
}
else{
    console.log('a2 is greater and the value is '+a2);
}
var arr2=[10,20,30,40,50]
for(let i = 0;i<arr2.length;i++){
    console.log(arr2[i]);
}

// for printing index
for (const i in arr2){
    console.log(i);
}

//for printing all elements
for (const i of arr2){
    console.log(i);
}
 

