const message = document.querySelector('#show-message');
const form = document.querySelector('form');
const search = document.querySelector('input');

// Preventing default refresh when submit is clicked on. //
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const findMovie = search.value;
    message.textContent = 'Loading Movies...';

    // Use the try and catch when the response is not working it will appear as an error. //
    try {
        const response = await fetch(`/movie?search=${findMovie}`);
        if (!response.ok) {
            message.textContent = 'This is an invalid selection. Please try again. ';
            return;
        }

        // img src link used to display pictures in the html file when user submits a movie name //
        const data = await response.json();
        if (data.error) {
            message.textContent = data.error;
        } else {
            message.textContent = ''; 
            data.body.results.forEach((movie) => {
                message.innerHTML += `
              <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
                <p>${movie.title}</p>
                
        `;
            });
        }
    } catch (error) {
        message.textContent = ' There is an error, try again.';
        console.error(error);
    }
});