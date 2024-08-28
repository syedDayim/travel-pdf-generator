let quotes = document.querySelectorAll('.quote-slider .quote');
let currentQuote = 0;

function showNextQuote() {
    quotes[currentQuote].classList.remove('active');
    currentQuote = (currentQuote + 1) % quotes.length;
    quotes[currentQuote].classList.add('active');
}

setInterval(showNextQuote, 3000); // Change quote every 3 seconds
