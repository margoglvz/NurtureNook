let water_counter = 0;
let waterlily_water_counter = 0;
let coin_counter = 0;

function water() {
    var lavender = document.getElementById("lavender_seed");
    function change_src(img_path) {
        lavender.src=img_path;
    }
    water_counter++; 
    if (water_counter > 24) {
        coin_counter++; 
        change_src(`images/lavender_coin.png`)
        setTimeout(change_src, 2000, `images/lavender_4.png`);
    }
   
    console.log(water_counter);
    if (water_counter > 24) {
        document.getElementById("coins").textContent = `Coins: ${coin_counter}`; 
    }
    
    var img_number = Math.floor(water_counter/8)+1;
    if (img_number < 5) {
        if (water_counter % 8 == 0) {
            console.log(`images/lavender_${img_number}.png`);
            change_src(`images/lavender_${img_number}.png`);
        }
    }
}

function water_waterlily() {
    var waterlily = document.getElementById("waterlily_seed");
    function change_src(img_path) {
        waterlily.src=img_path;
    }

    waterlily_water_counter++; 
    if (waterlily_water_counter > 24) {
        coin_counter++; 
        change_src(`images/waterlily_coin.png`)
        setTimeout(change_src, 2000, `images/waterlily_4.png`);
    }
   
    console.log(waterlily_water_counter);
    if (waterlily_water_counter > 24) {
        document.getElementById("coins").textContent = `Coins: ${coin_counter}`; 
    }
    
    var img_number = Math.floor(waterlily_water_counter/8)+1;
    if (img_number < 5) {
        if (waterlily_water_counter % 8 == 0) {
            console.log(`images/waterlily_${img_number}.png`);
            change_src(`images/waterlily_${img_number}.png`);
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
