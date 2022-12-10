/* 
🌟 APP: Make Netflix

Here we have the Netflix app but it's up to you to make it work by pulling all the movies using an API!

Create a fetchMovies() function that will make a dynamic API call to what you need 👇
========================================

- fetchMovies()

** fetchMovies takes in an URL, a div id or class from the HTML, and a path (poster or backdrop)



These are the 3 main functions and their URL'S you must create  👇
========================================

- getOriginals()
  * URL : 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

- getTrendingNow()
  * URL : 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'

- getTopRated()
  * URL : 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'


** These functions will provide the URL you need to fetch() movies of that genere **

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 CLASS 👉 'original__movies' = Div that holds Netflix Originals
#2 ID 👉 'trending' = Div that holds trending Movies
#3 ID 👉 'top_rated' = Div that holds top rated Movies
*/

// Call the main functions the page is loaded
window.onload = () => {
    getOriginals()
    getTrendingNow()
    getTopRated()
  }
  
  // ** Helper function that makes dynamic API calls **
  function fetchMovies(url, dom_element, path_type) {
    // Use Fetch with the url passed down 
  fetch(url)
  .then(response=>response.json())
  .then(data=>{
    showMovies(data,dom_element,path_type);
  })


  }
  
  //  ** Function that displays the movies to the DOM **
  showMovies = (movies, dom_element, path_type) => {
    let movieshow=document.querySelector(dom_element);
  
  
    // Loop through object
  for(let movie of movies.results){
    let imageElement=document.createElement('img')
    imageElement.setAttribute('id',movie.id)
    imageElement.src=`https://image.tmdb.org/t/p/original${movie[path_type]}`
    movieshow.appendChild(imageElement)
  }
      // Add event listener to handleMovieSelection() onClick
  
    }
  
  // ** Function that fetches Netflix Originals **
  function getOriginals() {
    let url='https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
  fetchMovies(url,'.original__movies','poster_path')
  }
//   // ** Function that fetches Trending Movies **
  function getTrendingNow() {
  let url='https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
  fetchMovies(url,'#trending','backdrop_path')
  }
  // ** Function that fetches Top Rated Movies **
  function getTopRated() {
    let url='https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
    fetchMovies(url,'#top_rated','backdrop_path')
  }
  
  
  
  
  