function clicked() {
    let userInput = document.getElementById('user').value;
    document.getElementById('results').innerHTML = "Gardens near " + userInput + "..."

    fetch('http://127.0.0.1:5000')
        .then(res => res.json())
        .then(response => {
            console.log(response);
            document.getElementById(
                'results'
            ).innerHTML = response.businesses[0].name;
            
        });
}