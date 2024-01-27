let water_counter = 0;


function water() {
    water_counter++; 
    console.log(water_counter);
    document.getElementById("meow").innerHTML = ""; 
    document.getElementById("meow").innerHTML += `
    <h1>${water_counter}</h1>
    `
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




