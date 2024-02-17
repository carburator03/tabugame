const tableUl = document.querySelector('#table-ul');
const NextButton = document.querySelector('#next-button');

function fetchWord() {
  tableUl.innerHTML = '';
  const randomNumber = Math.floor(Math.random() * 1359);
  fetch('./words.json')
    .then(response => response.json())
    .then(data => {
      let wordToGuess = document.createElement('li');
      wordToGuess.innerHTML = data[randomNumber].word.toUpperCase();
      tableUl.appendChild(wordToGuess);
      let words = data[randomNumber].prohibited.length;
      let i = 0;
      let wordCount = 0;
      while (i < words && wordCount < 10) {
        const word = document.createElement('li');
        word.innerHTML = data[randomNumber].prohibited[i].toUpperCase();
        tableUl.appendChild(word);
        i++;
        wordCount++;
      }
      console.log('i', i, 'wordCount', wordCount, 'id', randomNumber);
    });
}

fetchWord();

NextButton.addEventListener('click', fetchWord);
