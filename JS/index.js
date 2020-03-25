let form = document.getElementById("form");
let search = document.getElementById("search");

form.addEventListener("submit", e =>{
    e.preventDefault();
    let searchText = document.getElementById("search").value;
    getMovies(searchText);
});
function getMovies(searchText) {
    let imdbApiUrl = `https://www.omdbapi.com/?s=${searchText}&apikey=46203ac5`;
    window.fetch(imdbApiUrl).then(data =>{
        data.json().then(movies =>{
            MovieData = movies.Search;
            let output ="";
            for(let movie of MovieData){
                output +=`<div class="card mov_img">
                <img src="${movie.Poster}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${movie.Title}
                  <span class="badge badge-danger float-right">${movie.imdbID}</span>
                  <span class="badge badge-primary>${movie.Year}</span>
                  </h5>
                  <p class="card-text"></p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>`
            }
            document.getElementById("template").innerHTML=output;
        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
};