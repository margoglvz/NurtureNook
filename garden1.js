let water_counter = 0;


function water() {
    water_counter++; 
    console.log(water_counter);
    if (water_counter > 24) {
        document.getElementById("coins").innerHTML = ""; 
        document.getElementById("coins").innerHTML += `
        <h1>Coins: ${water_counter - 24}</h1>
        `
    }
    
    var img_number = Math.floor(water_counter/8)+1;
    if (img_number < 5) {
        if (water_counter % 8 == 0) {
            var lavender = document.getElementById("lavender_seed");
            console.log(`images/lavender_${img_number}.png`);
            lavender.src=`images/lavender_${img_number}.png`;
        }
    }
}

function display() {

}

function hi() {
    console.log("NO")
}
