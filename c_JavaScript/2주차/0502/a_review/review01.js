//! 문제 1: 최댓값 찾기 max
function findMax(array) {
  let max = array[0]; // 임의로 0번째 인덱스값이 젤 크다고 설정
  let length = array.length;
  for(let i = 0; i < length; i++){
    if(array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// 예시 사용
console.log(findMax([10, 3, 45, 78, 6]));  // 출력: 78

//! 문제 2: 평균 구하기 sum
// 주어진 숫자 배열의 평균을 구하는 함수를 작성

function findAverage(array) {
  let sum = 0;
  let length = array.length;
  for(let i = 0; i < length; i++ ) {
    sum += array[i];
  }
  return sum / length;
}

// 예시 사용
console.log(findAverage([10, 20, 30, 40, 50]));  // 출력: 30

//! 문제 3: 홀수 찾기 odds
// 주어진 숫자 배열에서 홀수만 추출하여 '새로운 배열'로 반환하는 함수를 작성

function findOdds(array) {
  let odds = [];
  let length = array.length;
  for(let i = 0; i < length; i++ ){
    if(array[i] % 2 !== 0) {
      odds.push(array[i]);
    }
  }
  return odds;
}

// 예시 사용
console.log(findOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));  // 출력: [1, 3, 5, 7, 9]

//! 문제 4: 최소값 찾기 min
// 주어진 숫자 배열에서 최소값을 찾는 함수를 작성

function findMin(array) {
  let min = array[0];
  let length = array.length;
  for(let i = 0; i < length; i++) {
    if(array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

// 예시 사용
console.log(findMin([10, 3, 45, 78, 6]));  // 출력: 3
