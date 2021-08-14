var initialPrice = document.querySelector('#initial-price');
var currentPrice = document.querySelector('#current-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var findBtn = document.querySelector('#find-btn');
var outputDiv = document.querySelector('#output-div');
var lottie = document.querySelectorAll('#lottie');
var theme = document.querySelector('#theme-display') 

lottie[0].style.display = "none";
lottie[1].style.display = "none" ;
outputDiv.style.display = "none";
findBtn.addEventListener("click",inputHandler)

function inputHandler(e)
{
e.preventDefault();
let cost = Number(initialPrice.value);
let qty = Number(stocksQuantity.value);
let curr = Number(currentPrice.value);

if(cost<=0 || qty<=0 || curr<=0){
    showOutput("Enter valid inputs")
}
else{calculateReturns(cost,qty,curr)}


}


function calculateReturns(initial,quantity,current){

    if(initial<current){
        let profit = (current-initial)*quantity
        let profitPercent = (current-initial)/initial*100
        outputDiv.style.display = "block";
        lottie[1].style.display = "block" ;
        lottie[0].style.display = "none";
        theme.style.backgroundColor = "white"
        showOutput(`you have gained ${profitPercent.toFixed(2)}% profit which evaluates to ₹${profit.toFixed(2)}`)

        if(profitPercent>50){
                theme.style.backgroundColor = "#A4D978"
        }
        

    }else if(initial===current){
        showOutput("risk hai toh isq hai")
        lottie[0].style.display = "none";
        lottie[1].style.display = "none" ;
        theme.style.backgroundColor = "white"
    }
    else if(initial>current){
        let loss = (initial - current)*quantity ;
        let lossPercent = (initial - current)/initial*100
        outputDiv.style.display = "block";
        lottie[0].style.display = "block" ;
        lottie[1].style.display = "none";
        theme.style.backgroundColor = "white"
        showOutput(`you have incured a loss of ${lossPercent.toFixed(2)}% which evaluates to ₹${loss.toFixed(2)}`)

        if(lossPercent>50){
            theme.style.backgroundColor = "#FF5A5A"
    }
    }
    else{
        showOutput("Please enter a valid input")
    }

}


function showOutput(message){
        outputDiv.innerHTML  = message;
}