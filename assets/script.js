// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Ruth Ann Lavarro" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0;// Gingerbread
let cc = 0 ;// Chocolate Chip
let sugar = 0; // Sugar Sprinkle



// selecting the element with an id of credit
const credit = document.querySelector('#credit');
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
// selecting the element with an id of minus-gb;
const gbMinusBtn = document.querySelector('#minus-gb')
// selecting the element with an id of add-cc;
const ccPlusBtn = document.querySelector('#add-cc')
// selecting the element with an id of minus-cc;
const ccMinusBtn = document.querySelector('#minus-cc')
// selecting the element with an id of add-sugar;
const sugarPlusBtn = document.querySelector('#add-sugar')
// selecting the element with an id of add-sugar;
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`;



// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb = gb +1;})
    
    //console.log('Gingerbread + button was clicked!')})

    gbMinusBtn.addEventListener('click', function() {
        if(gb > 0) {
        gb = gb -1;
        gbMinusBtn.textContent = `summary:${qty-gb}`;

        
    }})
   //console.log('Gingerbread - button was clicked!')})

   ccPlusBtn.addEventListener('click', function() {
    cc = cc +1;})
    //console.log('cc + button was clicked!')})

    ccMinusBtn.addEventListener('click', function() {
    if(cc > 0) {
        cc = cc -1;
    }})        
    //console.log('cc - button was clicked!')})

    sugarPlusBtn.addEventListener('click', function() {
        sugar = sugar +1;})
        //console.log('sugar + button was clicked!') })

    sugarMinusBtn.addEventListener('click', function() {
    if(sugar > 0) {
        sugar = sugar -1;
    }})
            //console.log('sugar - button was clicked!')})
            
// HINT: You can delete this console.log after you no longer need it!


// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

// TODO: Hook up event listeners for the rest of the buttons