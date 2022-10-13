const API_KEY = "api_key=a3b6591754e36707df4b22095b44db5e";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL = `${BASE_URL}/search/movie?${API_KEY}`;
const UPCOMING = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;

const main = document.getElementById("main");
const getMoviesData = async(url) => {
  fetch(url).then(res => res.json()).then(data => {
     return movieShowData(data.results);
  })  
}
getMoviesData(UPCOMING);

const movieShowData = (data) => {
  main.innerHTML = '';


  data.map(movie => {
    const {title, poster_path, vote_average, overview} = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("projects");
    movieEl.innerHTML = `
    <div class="project">
      <img src="${IMG_URL+poster_path}" class="img-projects" alt="" />
        <div class="desc">
          <h2>${title}</h2>
          <span class="vote">${vote_average} <i class="fa-sharp fa-solid fa-star"></i></span>
          <hr />
          <p>${overview}</p>
        </div>
    </div>
  `;

  main.appendChild(movieEl);

  })
}

const searchBar = document.getElementById('search-film');
searchBar.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = searchWoi.value;

  if(searchTerm) {
    getMoviesData(SEARCH_URL+'&query='+searchTerm);
  } else{
    getMoviesData(UPCOMING);
  }

  if(searchWoi.value == '') {
    alert('Please Input Your Film');
  }
})