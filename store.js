let num_coins = localStorage.getItem("coin_amount")

console.log(num_coins);
/*
document.getElementById("coins").innerHTML = `<h1 id="coins">Coins: ${num_coins}</h1>`; 
*/
function garden1() {
    window.location = "garden1.html";
}

function purchase(packet) {
    if (packet == 'chamomile') {
        document.getElementById("chamomile_image").style.filter = "brightness(120%)"; 
        setTimeout(1000); 
        document.getElementById("chamomile_image").style.filter = "brightness(50%)"; 
    }
    if (packet == 'cattail') {
        document.getElementById("cattail_image").style.filter = "brightness(120%)"; 
        setTimeout(1000); 
        document.getElementById("cattail_image").style.filter = "brightness(50%)"; 
    }

}

