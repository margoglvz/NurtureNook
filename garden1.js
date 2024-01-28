let water_counter = 0;
let waterlily_water_counter = 0;
let coin_counter = 0;

/*
localStorage.setItem("coin_amount", 0);
localStorage.setItem("water_amount", 0);
localStorage.setItem("waterlily_amount", 0);
*/

window.onload = function() {
    if (localStorage.getItem("coin_amount") != null) {
        coin_counter = localStorage.getItem("coin_amount"); 
    }
    
    if (localStorage.getItem("water_amount") != null) {
        water_counter = localStorage.getItem("water_amount") 
    }
    
    if (localStorage.getItem("waterlily_amount") != null) {
        waterlily_water_counter = localStorage.getItem("waterlily_amount") 
    }
    displayImage(); 
}

function displayImage() {
    if (water_counter >= 24) {
        img_num1 = 4; 
    } else {
        img_num1 = Math.floor(water_counter/8)+1;
    }

    if (waterlily_water_counter >= 24) {
        img_num2 = 4;
    } else {
        img_num2 = Math.floor(waterlily_water_counter/8)+1;
    }
    
    document.getElementById("lavender_seed").src = `images/lavender_${img_num1}.png`;
    document.getElementById("waterlily_seed").src = `images/waterlily_${img_num2}.png`;
    document.getElementById("coins").textContent = `Coins: ${coin_counter}`; 
}

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
    localStorage.setItem("coin_amount", coin_counter);
    localStorage.setItem("water_amount", water_counter);
    localStorage.setItem("waterlily_amount", waterlily_water_counter);
    window.location = "html_front.html"; 
}

function store() {
    localStorage.setItem("coin_amount", coin_counter);
    localStorage.setItem("water_amount", water_counter);
    localStorage.setItem("waterlily_amount", waterlily_water_counter);
    window.location = "store.html"; 
}

function garden1() {
    window.location = "garden1.html";
}
