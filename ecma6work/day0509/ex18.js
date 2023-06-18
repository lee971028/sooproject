var numbers=[1,2,3,4,5];
var processed=numbers.map(function(no){

    return no*no;
});

console.log(processed);

let colors=['red','blue','pink','orange','gray'];

colors.map((col)=>{
    console.log(col);
})