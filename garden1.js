let water_counter = 0;
let waterlily_water_counter = 0;
let coin_counter = 0;

function water() {
    water_counter++; 
    if (water_counter > 24) {
        coin_counter++; 
    }
   
    console.log(water_counter);
    if (water_counter > 24) {
        document.getElementById("coins").textContent = `Coins: ${coin_counter}`; 
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

function water_waterlily() {
    waterlily_water_counter++; 
    if (waterlily_water_counter > 24) {
        coin_counter++; 
    }
   
    console.log(waterlily_water_counter);
    if (waterlily_water_counter > 24) {
        document.getElementById("coins").textContent = `Coins: ${coin_counter}`; 
    }
    
    var img_number = Math.floor(waterlily_water_counter/8)+1;
    if (img_number < 5) {
        if (waterlily_water_counter % 8 == 0) {
            var waterlily = document.getElementById("waterlily_seed");
            console.log(`images/waterlily_${img_number}.png`);
            waterlily.src=`images/waterlily_${img_number}.png`;
        }
    }
}


function home() {
    window.location = "html_front.html"; 
}

function store() {
    localStorage.setItem("coin_amount", coin_counter)
    window.location = "store.html"; 
}

function garden1() {
    window.location = "garden1.html";
}
