// IDENTIFIERS

const getAdvice = document.getElementById('get-advice');
const adviceId = document.getElementById('advice-id');
const adviceQuote = document.getElementById('quote');


getAdvice.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice') // fetching the data server and converting the data into JSON format
    .then(response => response.json()) // getting a response from the server and converting it into JSON format
    .then(data => {
        console.log(data)
        adviceQuote.textContent = data.slip.advice;
        adviceId.textContent = data.slip.id;
    })
    .catch(error => {
        console.log(error);
        adviceQuote.textContent= 'error fetching advice.';
        console.error('error!', error)
    })
});

