//! 비동기 함수 

// 1. 콜백 함수 
function fetchData(callback) {
  setTimeout(() => {
    callback('Data load');
  }, 1000);
}

fetchData(data => {
  console.log(data); // 1초 뒤에 Data load 출력 
})

// 2. 프로미스 
function pFetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data load');
    })
  }) 
}

pFetchData().then(data => {
  console.log(data);  // data는 resolve 성공의 데이터 - Data load
}).catch(error => {
  console.log(error);
})

// 3. async / await

async function aFetchData() {
  try { 
    // fetch('url')함수
    // : promise 객체로 변환
    // const response = await fecth('url');
    // const data = await response.json();

    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data load')
      }, 1000);
    });

    console.log(data);
  } catch(error) {
    console.log(error);
  }
}