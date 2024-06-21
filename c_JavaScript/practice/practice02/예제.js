//! 영화 데이터 가져오기

//& API 설명 첨부 

// fetchMovie(id) - 주어진 id에 대한 영화 정보를 가져오는 함수 
// fetchReviews(movieid) - 주어진 영화 id에 대한 리뷰 정보를 가져오는 함수 
// fetchActors(movieid)

function fetchMovie(id) {

} 

function fetchReviews(movied) {

}

function fetchActors(movied) {

}

//& 1. API 함수를 활용한 콜백함수 구현 
function getMovieData(number) {
  fetchMovie(number, (number) => {
    console.log("Movie", movie);
    fetchReviews(movie.id, (reviews) => {
        console.log('Reviews', reviews);
        fetchActors(movie.id, ac)
    })
  })
}