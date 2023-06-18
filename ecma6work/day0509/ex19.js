const array = [1, 2, 3, 4, 5]; // 3 을 제거 하고 싶다. 
//const deletedIndex = 2           // 3의 인덱스는 2 이다.
array.splice(2, 1); // 삭제할 인덱스, 1 개만 삭제 (즉, 3만 삭제)

console.log(array); // [1, 2, 4, 5] 


//slice
//- slice 는 원본 배열을 건드리지 않고, 수정된 복사 배열을 리턴한다. (교체는 안됨)
var array2 = [1, 2, 3, 4, 5]; 
var a2=array2.slice(2,4); // (시작 인덱스, 마지막인댁스-1);
console.log(a2); // [3,4] 


// Array.concat(valueN)
// concat 메서드는 원하는 값을 원본 배열 끝에 추가한 뒤 새로운 배열을 만든다.
// 원하는 값이 배열인 경우, 배열을 해체하여 요소들을 추가한다.
// 원본 배열은 바뀌지 않는다.

let con=[1,2].concat([3,4],[5,6]);
console.log(con);



//filter
var arr = [1, 2, 3, 4, 5];  // 이번엔 2를 없애볼 거다.
var delIdx = 1;     // 2의 인덱스는 1이다.
arr = arr.filter(function(item, index) { // filter 안에 인자로 함수를 받고, index 만 필요하니 명시해주자
    return index !== delIdx     // 배열을 돌며 인덱스1 이 아닌 나머지만 다시 소집한다
});

console.log(arr) // [1, 3, 4, 5]      // 2가 빠진 나머지만 소집됬다.
