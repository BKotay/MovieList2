const request = require("postman-request");

function getMovies(findMovie, callback) {
    const url = 'https://api.themoviedb.org/3/search/movie?query=' + encodeURIComponent(findMovie) + '&include_adult=false&language=en-US&page=1';
    const options = {
        url,
        json: true,
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDE5OWJjMzk2OGRhNmI4NmI2OGI0ODUwNjM4ZTQ1NyIsIm5iZiI6MTczNDQ1OTk2NS4zOTkwMDAyLCJzdWIiOiI2NzYxYzIzZDVmOGE4OWQyMzJkMzQxZWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1UnwyZgpVGH5fywxk-SEF66ITvG8d0LBLFjwbe33a2I'
  
        }
    };
    request(options, (error, response) => {
        if (error) {
            callback('There is an error with your API.', undefined)
        } else if (response.statusCode != 200) {
            callback('error', undefined)
        } else {
            callback(undefined, response)
        }
    })
}

module.exports = getMovies