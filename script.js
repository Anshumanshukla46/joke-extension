fetch("https://icanhazdadjoke.com/slack")
    .then(data => data.json())
    .then(joke => {
        const text = joke.attachments[0].text;

        const jokeElem = document.getElementById("joke")
        jokeElem.innerHTML = text
    })