function func1(x,y=200,z=300){
    console.log(x,y,z);
}

func1(3,5,6);
func1(100);
func1(10,20);
func1();

function func2(a,b){
    return a+b;
}

let r1=func2(5,6);
console.log(r1);

let arr=[2,3,4];
let r2=func2(arr[0],arr[1]);
console.log(r2);

func1(...arr);
func1(arr[0],arr[1],arr[2]);

let r3=func2(...arr);
console.log(r3);