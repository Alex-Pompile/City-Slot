document.addEventListener("DOMContentLoaded", function () {
    const spinButton = document.getElementById("spinButton");
    spinButton.addEventListener("click", spinSlotMachine);
});

let balance = 500;
const spinCost = 1;
const symbols = ["🍒", " 🍋", "🍊", "🍇", "🔔", "💎", "💰"];
const resultElement = document.getElementById("result");
const balanceElement = document.getElementById("balance");
const slotMachineElement = document.querySelector(".slot-machine");

function spinSlotMachine() {
    if (balance < spinCost) {
        alert("Nu ai suficient sold pentru a juca.");
        return;
    }

    
    slotMachineElement.classList.remove("spin");

    balance -= spinCost;
    balanceElement.innerText = `Sold: ${balance}`;

    const randomSymbols = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        randomSymbols.push(symbols[randomIndex]);
    }

    resultElement.innerText = `Rezultat: ${randomSymbols.join(" ")}`;

    checkWin(randomSymbols);

   
    setTimeout(function () {
        slotMachineElement.classList.add("spin");
    }, 100);
}


function checkWin(symbols) {
 
    if (symbols[0] === symbols[1] && symbols[1] === symbols[2]) {
       
        balance += 50; // Adaugă un premiu de 10 la "balance"
        balanceElement.innerText = `Sold: ${balance}`;
        alert("Felicitări! Ai câștigat!");
    }
}
