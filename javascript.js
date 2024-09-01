
let main_box = document.querySelector("#main_container");

const brightColors = [
    "#FF5733", // Bright Orange-Red
    "#33FF57", // Bright Lime Green
    "#3357FF", // Bright Blue
    "#FF33A1", // Bright Pink
    "#FFFF33", // Bright Yellow
    "#FF33FF", // Bright Magenta
    "#33FFF3", // Bright Cyan
    "#FF8C33", // Bright Orange
    "#33FF8C", // Bright Mint Green
    "#8C33FF"  // Bright Purple
];

function getRandomColor() {
    // Get a random index from the brightColors array
    const randomIndex = Math.floor(Math.random() * brightColors.length);
    // Return the color at that index
    return brightColors[randomIndex];
}

function create_grid(size) {
    total_squares = size * size

    // create 16 divs
    for (let i = 0; i<total_squares; i++) {
        // create a div
        let div = document.createElement("div");
        // give it an id
        div.className = `divbox ${i}`;
        
        div.style.height = (100 / size) + '%';
        div.style.width = (100 / size) + '%';

        
        
        // add mouse over event
        div.onmouseover = function() {
            div.classList.add('divbox_over');
            div.style.backgroundColor = getRandomColor();
        }
        // append to the main container 
        main_box.appendChild(div)
}}

create_grid(4);



let button_input = document.querySelector("button");
button_input.addEventListener("click", () => {
    let userInput = prompt("How many squares per side?: ");
    userInput = Number(userInput);

    if (isNaN(userInput)) {
        alert('Please enter a valid number');
    } else if (userInput > 100) {
        alert('Please enter a number less than 100');
    } else {
        // remove old squares
        while (main_box.firstChild) {
            main_box.removeChild(main_box.firstChild);
        }
        // Create new grid
        create_grid(userInput)
    }
})

