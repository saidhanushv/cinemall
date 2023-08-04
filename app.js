//We will be pulling data from an API called.. using "fetch"
//Data source- themoviedb.org
// Log in>more>API>Register>Find API key

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7dc4e9ced6495361eebeb452496d7262&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=7dc4e9ced6495361eebeb452496d7262&query="'

//Event listener on the form-
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

//Get initial movies-
getMovies(API_URL)
async function getMovies(url){
    const response = await fetch(url)
    const data = await response.json() //To get the data in JSON format

    showMovies(data.results)
}

function showMovies(movies){
    main.innerHTML = ''

    movies.forEach((movie)=>{ //To get all the movies to show in the webpage output
        //Destructuring- Pull values out of the movie object
        const {title, poster_path, vote_average, overview} = movie

        const movieElement = document.createElement('div')
        movieElement.classList.add('movie')

        movieElement.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
                <div class="overview">
                    <h3>Overview</h3>
                        ${overview}
                </div>
        `

        main.appendChild(movieElement)
    })
}

function getClassByRate(vote){
    if(vote>=8){
        return 'green'
    }
    else if(vote>=5){
        return 'orange'
    }
    else{
        return 'red'
    }
}

//Event listener on the form-
form.addEventListener('submit', (e)=>{
    e.preventDefault() //Does not submit data to the page immediately

    const searchTerm = search.value

    if(searchTerm && searchTerm!== ''){
        getMovies(SEARCH_API + searchTerm) //Concatinating API and search term
        search.value = ''
    }
    else{
        window.location.reload  //IF WE SEARCH (CLICK ENTER) WITHOUT ANYTHING, IT WILL RELOAD THE PAGE
    }
})