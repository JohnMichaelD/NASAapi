

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('.apod').src = data.url
            document.querySelector('.date').innerHTML = data.date
            document.querySelector('.title').innerText = data.title
            document.querySelector('.copyright').innerText = data.copyright
            document.querySelector('.explanation').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        });