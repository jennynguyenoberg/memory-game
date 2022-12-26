document.addEventListener('DOMContentLoaded', () => {

  const cardsList = [
    { name: 'alien', image: './images/alien.png' },
    { name: 'alien', image: './images/alien.png' },
    { name: 'battery', image: './images/battery.png' },
    { name: 'battery', image: './images/battery.png' },
    { name: 'coffee-cup', image: './images/coffee-cup.png' },
    { name: 'coffee-cup', image: './images/coffee-cup.png' },
    { name: 'heart', image: './images/heart.png' },
    { name: 'heart', image: './images/heart.png' },
    { name: 'mobile-phone', image: './images/mobile-phone.png' },
    { name: 'mobile-phone', image: './images/mobile-phone.png' },
    { name: 'rainbow', image: './images/rainbow.png' },
    { name: 'rainbow', image: './images/rainbow.png' },
    { name: 'star', image: './images/star.png' },
    { name: 'star', image: './images/star.png' },
    { name: 'droplet', image: './images/droplet.png' },
    { name: 'droplet', image: './images/droplet.png' },
    { name: 'sunglasses', image: './images/sunglasses.png' },
    { name: 'sunglasses', image: './images/sunglasses.png' },
    { name: 'thunder', image: './images/thunder.png' },
    { name: 'thunder', image: './images/thunder.png' }
  ];

  cardsList.sort(() => 0.5 - Math.random());
  const grid = document.querySelector('.gameGrid');
  const attemptsHolder = document.querySelector('.attemptsHolder');
  const foundHolder = document.querySelector('.foundHolder');
  const cardsInGame = 10;
  const controls = document.querySelector(".controls-container");

  let scores = 0;
  let foundCards = 0;
  attemptsHolder.textContent = scores;
  foundHolder.textContent = foundCards;

  let chosenCards = [];
  let chosenCardsId = [];

  function initiateBoard() {
    for (let i = 0; i < cardsList.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'images/placeholder.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  function flipCard() {
    if (chosenCards.length != 2) {
      let cardId = this.getAttribute('data-id');
      if (this.getAttribute('src') != 'images/blank.png') {
        chosenCards.push(cardsList[cardId].name);
        chosenCardsId.push(cardId);
        this.setAttribute('src', cardsList[cardId].image);
        if (chosenCards.length == 2) {
          setTimeout(checkForMatch, 500);
        }
      }
    }
  }

  function checkForMatch() {
    scores++;
    let cards = document.querySelectorAll('img');
    let firstCard = chosenCardsId[0];
    let secondCard = chosenCardsId[1];
    if (chosenCards[0] == chosenCards[1]) {
      foundCards++;
      cards[firstCard].setAttribute('src', 'images/blank.png');
      cards[secondCard].setAttribute('src', 'images/blank.png');
    } else {
      cards[firstCard].setAttribute('src', 'images/placeholder.png');
      cards[secondCard].setAttribute('src', 'images/placeholder.png');
    }
    chosenCards = [];
    chosenCardsId = [];
    attemptsHolder.textContent = scores;
    foundHolder.textContent = foundCards;
    if (foundCards == cardsInGame) {
      alert('Congratulations! You found all cards!');
    }
  }

  initiateBoard();
});