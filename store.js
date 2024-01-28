let num_coins = localStorage.getItem("coin_amount"); 
let num_lavender = localStorage.getItem("water_amount");
let num_waterlily = localStorage.getItem("waterlily_amount");

let chamomile_bought = false; 
let cattail_bought = false; 

window.onload = function() {
    document.getElementById("coins").textContent = `Coins: ${num_coins}`; 
    localStorage.setItem("coin_amount", num_coins);
    localStorage.setItem("water_amount", num_lavender);
    localStorage.setItem("waterlily_amount", num_waterlily);
}

function garden1() {
    window.location = "garden1.html";
}

function reset() {
    document.getElementById("cattail_image").style.filter = "brightness(100%)"; 
    document.getElementById("chamomile_image").style.filter = "brightness(100%)"; 

}

function purchase(packet) {
    if (num_coins >= 10) {
        if (packet == 'chamomile') {
            document.getElementById("chamomile_image").style.filter = "brightness(120%)"; 
            setTimeout(reset, 200); 
            num_coins -= 10; 
            chamomile_bought = true; 
            localStorage.setItem("packet1", true);
        }
        if (packet == 'cattail') {
            document.getElementById("cattail_image").style.filter = "brightness(120%)"; 
            setTimeout(reset, 200); 
            num_coins -= 10; 
            cattail_bought = true; 
            localStorage.setItem("packet2", true);

        }
        document.getElementById("coins").textContent = `Coins: ${num_coins}`;  
    } 
    localStorage.setItem("coin_amount", num_coins);
    localStorage.setItem("water_amount", num_lavender);
    localStorage.setItem("waterlily_amount", num_waterlily);

    localStorage.setItem("packet1", localStorage.getItem("packet1"));
    localStorage.setItem("packet2", localStorage.getItem("packet2"));
}
