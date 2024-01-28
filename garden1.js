let water_counter = 0;
let waterlily_counter = 0;
let coin_counter = 0;
let chamomile_counter = 0;
let cattail_counter = 0; 

/*
localStorage.setItem("coin_amount", 0);
localStorage.setItem("water_amount", 0);
localStorage.setItem("waterlily_amount", 0);
localStorage.setItem("packet1", false);
localStorage.setItem("packet2", false);
*/

function getValues() {
    if (localStorage.getItem("coin_amount") != null) {
        coin_counter = localStorage.getItem("coin_amount"); 
    }
    
    if (localStorage.getItem("water_amount") != null) {
        water_counter = localStorage.getItem("water_amount");
    }
    
    if (localStorage.getItem("waterlily_amount") != null) {
        waterlily_counter = localStorage.getItem("waterlily_amount"); 
    }
}

function getPackets() {
    if (localStorage.getItem("packet1") == true) {
        document.getElementById("chamomile_mini").style.visibility = "visible"; 
    } else {
        localStorage.setItem("packet1", false); 
    }
    
    if (localStorage.getItem("packet2") == true) {
        document.getElementById("cattail_mini").style.visibility = "visible"; 
    } else {
        localStorage.setItem("packet2", false); 
    }
}

window.onload = function() {
    getValues(); 
    getPackets(); 
    displayImage(); 
}

function displayImage() {
    if (water_counter >= 24) {
        img_num1 = 4; 
    } else {
        img_num1 = Math.floor(water_counter/8)+1;
    }

    if (waterlily_counter >= 24) {
        img_num2 = 4;
    } else {
        img_num2 = Math.floor(waterlily_counter/8)+1;
    }
    
    if (chamomile_counter >= 24) {
        img_num3 = 4;
    } else {
        img_num3 = Math.floor(chamomile_counter/8)+1;
    }

    if (cattail_counter >= 24) {
        img_num4 = 4;
    } else {
        img_num4 = Math.floor(cattail_counter/8)+1;
    }

    document.getElementById("lavender_seed").src = `images/lavender_${img_num1}.png`;
    document.getElementById("waterlily_seed").src = `images/waterlily_${img_num2}.png`;
    document.getElementById("chamomile_seed").src = `images/chamomile_${img_num3}.png`;
    document.getElementById("cattail_seed").src = `images/cattail_${img_num4}.png`;
    document.getElementById("coins").textContent = `Coins: ${coin_counter}`; 
}

function replace1() {
    document.getElementById("lavender_group").style.visibility = "hidden"; 
    document.getElementById("chamomile_group").style.visibility = "visible"; 
}
function replace2() {
    document.getElementById("waterlily_group").style.visibility = "hidden"; 
    document.getElementById("cattail_group").style.visibility = "visible"; 
}


function water_lavender() {
    function change_src(img_path) {
        document.getElementById("lavender_seed").src=img_path;
    }
    water_counter++; 

    if (water_counter > 24) {
        coin_counter++; 
        document.getElementById("coins").textContent = `Coins: ${coin_counter}`; 
        change_src(`images/lavender_coin.png`)
        setTimeout(change_src, 200, `images/lavender_4.png`);
    } else {
        img_num1 = Math.floor(water_counter/8)+1;
        change_src(`images/lavender_${img_num1}.png`);
    }
}


function water_waterlily() {
    function change_src(img_path) {
        document.getElementById("waterlily_seed").src=img_path;
    }
    waterlily_counter++; 

    if (waterlily_counter > 24) {
        coin_counter++; 
        document.getElementById("coins").textContent = `Coins: ${coin_counter}`; 
        change_src(`images/waterlily_coin.png`)
        setTimeout(change_src, 200, `images/waterlily_4.png`);
    } else {
        img_num2 = Math.floor(waterlily_counter/8)+1;
        change_src(`images/waterlily_${img_num2}.png`);
    }
}


function water_chamomile() {
    function change_src(img_path) {
        document.getElementById("chamomile_seed").src=img_path;
    }
    chamomile_counter++; 

    if (chamomile_counter > 24) {
        coin_counter++; 
        document.getElementById("coins").textContent = `Coins: ${coin_counter}`; 
        change_src(`images/chamomile_coin.png`)
        setTimeout(change_src, 200, `images/chamomile_4.png`);
    } else {
        img_num3 = Math.floor(chamomile_counter/8)+1;
        change_src(`images/chamomile_${img_num3}.png`);
    }
}


function water_cattail() {
    function change_src(img_path) {
        document.getElementById("cattail_seed").src=img_path;
    }
    cattail_counter++; 

    if (cattail_counter > 24) {
        coin_counter++; 
        document.getElementById("coins").textContent = `Coins: ${coin_counter}`; 
        change_src(`images/cattail_coin.png`)
        setTimeout(change_src, 200, `images/cattail_4.png`);
    } else {
        img_num3 = Math.floor(cattail_counter/8)+1;
        change_src(`images/cattail_${img_num3}.png`);
    }
}


function home() {
    localStorage.setItem("coin_amount", coin_counter);
    localStorage.setItem("water_amount", water_counter);
    localStorage.setItem("waterlily_amount", waterlily_counter);
    localStorage.setItem("packet1", localStorage.getItem("packet1"));
    localStorage.setItem("packet2", localStorage.getItem("packet2"));
    window.location = "html_front.html"; 
}

function store() {
    localStorage.setItem("coin_amount", coin_counter);
    localStorage.setItem("water_amount", water_counter);
    localStorage.setItem("waterlily_amount", waterlily_counter);
    localStorage.setItem("packet1", localStorage.getItem("packet1"));
    localStorage.setItem("packet2", localStorage.getItem("packet2"));
    window.location = "store.html"; 
}

function garden1() {
    window.location = "garden1.html";
}
