var result=0;
console.time("sum_time");
for(var i=1;i<=10;i++){
    result+=i;
}

console.timeEnd("sum_time");
console.log("1~10까지의 합: %d",result);
console.log("현재실행중인 파일:%s",__filename);//경로포함 파일명출력
console.log("현재실행중인 파일경로: %s",__dirname);//경로만 출력
var person={name:"한가인",addr:"강남구"};
console.dir(person);
console.dir(person.name);
