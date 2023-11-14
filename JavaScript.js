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

    // Elimină clasa "spin" pentru a opri pulsarea
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

    // Adaugă o scurtă întârziere și activează din nou efectul de pulsare
    setTimeout(function () {
        slotMachineElement.classList.add("spin");
    }, 100);
}


function checkWin(symbols) {
    // Implementează regulile pentru câștiguri aici
    // Exemplu: dacă sunt 3 simboluri identice, acordă un premiu
    if (symbols[0] === symbols[1] && symbols[1] === symbols[2]) {
        // Implementează logica pentru câștig aici
        // De exemplu, poți adăuga la "balance" un anumit premiu
        balance += 50; // Adaugă un premiu de 10 la "balance"
        balanceElement.innerText = `Sold: ${balance}`;
        alert("Felicitări! Ai câștigat!");
    }
}