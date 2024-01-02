const quoteNumberText = document.getElementById('quoteNumberText');
const quoteText = document.getElementById('quoteText');
const generateButton = document.getElementById('generateButton');

let quoteNumber = 0;

generateButton.addEventListener('click', fetchQuote);

async function fetchQuote() {
  try {
    quoteNumber++;
    quoteNumberText.textContent = `ADVICE #${quoteNumber}`;
    
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const quote = data.slip.advice;
    quoteText.textContent = '"' + quote + '"';
  } catch (error) {
    console.error('Error fetching quote:', error);
    quoteText.textContent = "Failed to fetch quote.";
  }
}

// Initial fetch on page load
fetchQuote();
