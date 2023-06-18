var a=1;
var b=2;

function myFuction(){

    var a=3;
    let b=2;

    if(true){
        var a=5;
        let b=6;

        console.log(a);
        console.log(b);
    }

    console.log(a);
    console.log(b);
}

myFuction();
console.log(a);
    console.log(b);
