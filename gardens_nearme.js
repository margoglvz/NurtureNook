function clicked() {
    let userInput = document.getElementById('user').value;
    document.getElementById('results').innerHTML = "Gardens near " + userInput + "..."

    fetch('http://127.0.0.1:5000/' + userInput)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            for (let i = 0; i < response.businesses.length; i++) {
                document.getElementById(
                    'results'
                ).innerHTML += `${response.businesses[i].name} class="business"`;
                document.getElementById(
                    'results'
                ).innerHTML += `<img src="${response.businesses[i].image_url}" class="picture"/> <br>`;
    
            }
           
        });
}

