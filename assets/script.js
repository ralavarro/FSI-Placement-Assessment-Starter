// Projec By
let yourName = "Ruth Ann Lavarro" 
let gbtotal = 1;
let cctotal = 1;
let sugartotal = 1;
let overalltotal = 0;


// Initializing count
let gb = 0;// Gingerbread
let cc = 0 ;// Chocolate Chip
let sugar = 0; // Sugar Sprinkle

// Selecting Credit and Button Elements
const credit = document.querySelector('#credit');
const gbPlusBtn = document.querySelector('#add-gb');
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

//Get Element
let qtygb = document.getElementById('qty-gb')
let qtycc = document.getElementById('qty-cc')
let qtysugar = document.getElementById('qty-sugar')
let Total = document.getElementById('qty-total')

// Code to update name display
credit.textContent = `Created by ${yourName}`;


/*Event Listeners
Increment/decrement each by 1 as the button is clicked*/

//Incrementing code
gbPlusBtn.addEventListener('click', function() {
     gbtotal = gbtotal + 1;

    console.log (gbtotal);
    qtygb.textContent = `${gbtotal}`;
    Total.textContent = `${gbtotal}`;
})

ccPlusBtn.addEventListener('click', function() {
    cctotal = cctotal + 1;
   //console.log (cctotal);
   qtycc.textContent = `${cctotal}`;
})

sugarPlusBtn.addEventListener('click', function() {
    sugartotal = sugartotal + 1;
   //console.log (sugartotal);
   qtysugar.textContent = `${sugartotal}`;
})

//Decrementing
gbMinusBtn.addEventListener('click', function() {
    if(gbtotal > 0) {
        gbtotal = gbtotal -1;
      //  console.log (gbtotal);
      qtygb.textContent = `${gbtotal}`;
    }})
   
ccMinusBtn.addEventListener('click', function() {
    if(cctotal > 0) {
        cctotal = cctotal -1;
        //console.log (cctotal);
        qtycc.textContent = `${cctotal}`;
    }})        
    
sugarMinusBtn.addEventListener('click', function() {
    if(sugartotal > 0) {
        sugartotal = sugartotal -1;
       // console.log (sugartotal);
        qtysugar.textContent = `${sugartotal}`

        ;
    }})





/*Totaling
let Total = qty-gb + qty-cc + qty-sugar;
Total.textContent = `${`qty-total`}*/