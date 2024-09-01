

function create_grid(size) {
    let main_box = document.querySelector("#main_container");

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
        }
        // append to the main container 
        main_box.appendChild(div)
}}

create_grid(8);



let button_input = document.querySelector("button");
button_input.addEventListener("click", () => {
    let userInput = prompt("How many squares per side?: ");
    

    // remove old grid
    main_box.remove();

})

