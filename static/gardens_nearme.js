function home() {
    window.location = "html_front.html";
}

function clicked() {
    let userInput = document.getElementById('user').value;
    document.getElementById('results').innerHTML = "Gardens near " + userInput + "..." + "<br><br>"

    document.getElementById('results').className += " loadingtext"

    fetch('/' + userInput)
        .then(res => res.json())
        .then(response => {
            console.log(response);
            for (let i = 0; i < response.businesses.length; i++) {
                document.getElementById(
                    'results'
                ).innerHTML += response.businesses[i].name;
                document.getElementById(
                    'results'
                ).className += " business"
                document.getElementById(
                    'results'
                ).innerHTML += `<img src="${response.businesses[i].image_url}" class="picture"/> <br>`;
    
            }
           
        });
}

