let num_coins = localStorage.getItem("coin_amount"); 
let num_lavender = localStorage.getItem("water_amount");
let num_waterlily = localStorage.getItem("waterlily_amount");
let num_cattail = localStorage.getItem("cattail_amount");
let num_chamomile = localStorage.getItem("chamomile_amount");

function reset() {
    localStorage.setItem("coin_amount", 0);
    localStorage.setItem("water_amount", 0);
    localStorage.setItem("waterlily_amount", 0);
    localStorage.setItem("chamomile_amount", 0);
    localStorage.setItem("cattail_amount", 0);
    localStorage.setItem("packet1", false);
    localStorage.setItem("packet2", false);
    localStorage.setItem("replaced1", false);
    localStorage.setItem("replaced2", false);
}
window.onload = function() {
    localStorage.setItem("coin_amount", num_coins);
    localStorage.setItem("water_amount", num_lavender);
    localStorage.setItem("waterlily_amount", num_waterlily);
    localStorage.setItem("chamomile_amount", num_chamomile);
    localStorage.setItem("cattail_amount", num_cattail); 
    console.log(num_coins); 
}

function garden1() {
    window.location = "garden1.html";
}