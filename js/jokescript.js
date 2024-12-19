document.getElementById('getJoke').addEventListener('click', generateJoke);

function generateJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            const joke = `${data.setup} - ${data.punchline}`;
            document.getElementById('displayJoke').textContent = joke;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            document.getElementById('displayJoke').textContent = "Oops! Couldn't fetch a joke.";
        });
}