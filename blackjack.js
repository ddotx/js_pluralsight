let suits=['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values=['Ace', 'Kings', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

let textArea=document.getElementById('text-area');
let newGameButton=document.getElementById('new-game-button');
let hitButton=document.getElementById('hit-button');
let stayButton=document.getElementById('stay-button');

hitButton.style.display='none';
stayButton.style.display='none';

newGameButton.addEventListener('click',function () {
    textArea.innerText='Started...';
    newGameButton.style.display='none';
    hitButton.style.display='inline';
    stayButton.style.display='inline';
});

function createDeck() {
    let deck=[];
    for(let suitIdx=0; suitIdx<suits.length;suitIdx++){
        for(let valueIdx=0; valueIdx<values.length;valueIdx++){
            let card={
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push(card);
            //deck.push(values[valuesIdx] + ' of ' + suits[suitIdx]);
        }
    }
    return deck;
}
//console.log(createDeck());
function getCardString(card) {
    return card.value + ' of ' + card.suit;
}


function getNextCard() {
    return deck.shift();
}
let deck=createDeck();


/*for (let i=0;i<deck.length;i++){
    console.log(deck[i]);
}*/

console.log('---------------'+'\n');
let playerCards = [ getNextCard(), getNextCard()];

//let card1="Ace of Spades";
//card2="Ten of Hearts";

console.log("Welcome to Blackjack!");
console.log("You are dealt: ");
console.log(" " + getCardString(playerCards[0]));
console.log(" " + getCardString(playerCards[1]));

