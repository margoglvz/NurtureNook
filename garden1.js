let water_counter = 0;


function water() {
    water_counter++; 
    console.log(water_counter);
    document.getElementById("meow").innerHTML = ""; 
    document.getElementById("meow").innerHTML += `
    <h1>${water_counter}</h1>
    `
}

function display() {

}




