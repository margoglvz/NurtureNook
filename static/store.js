let num_coins = localStorage.getItem("coin_amount"); 
let num_lavender = localStorage.getItem("water_amount");
let num_waterlily = localStorage.getItem("waterlily_amount");
let num_cattail = localStorage.getItem("cattail_amount");
let num_chamomile = localStorage.getItem("chamomile_amount");

window.onload = function() {
    document.getElementById("coins").textContent = `Coins: ${num_coins}`; 
    console.log("packet1 is " + localStorage.getItem("packet1"))
    console.log("packet2 is " + localStorage.getItem("packet2"))
    localStorage.setItem("coin_amount", num_coins);
    localStorage.setItem("water_amount", num_lavender);
    localStorage.setItem("waterlily_amount", num_waterlily);
    localStorage.setItem("chamomile_amount", num_chamomile);
    localStorage.setItem("cattail_amount", num_cattail); 

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
            localStorage.setItem("packet1", true);
            console.log("purchased packet1")
        }
        if (packet == 'cattail') {
            document.getElementById("cattail_image").style.filter = "brightness(120%)"; 
            setTimeout(reset, 200); 
            num_coins -= 10; 
            localStorage.setItem("packet2", true);
            console.log("purchased packet2")
        }
        document.getElementById("coins").textContent = `Coins: ${num_coins}`;  
    } 

    localStorage.setItem("coin_amount", num_coins);
    localStorage.setItem("water_amount", num_lavender);
    localStorage.setItem("waterlily_amount", num_waterlily);
    localStorage.setItem("chamomile_amount", num_chamomile);
    localStorage.setItem("cattail_amount", num_cattail); 

    localStorage.setItem("packet1", localStorage.getItem("packet1"));
    localStorage.setItem("packet2", localStorage.getItem("packet2"));
}
