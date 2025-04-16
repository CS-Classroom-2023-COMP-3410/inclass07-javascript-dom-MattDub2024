
let deck = [];

for(i=127137; i<127137+62; i++){

    
    let cardString = '&#${i};';
    deck.push(cardString);
    let newNode= document.createElement('div');
    newNode.className = 'card';
    newNode.id=i;
    newNode.innerHTML = cardString;
    document.body.appendChild(newNode);
}

let cardsChoice = deck.slice(0,10)
let gameCards=[]


for(let card of cardChoice){
    gameCards.push(card)
    gameCards.push(card)
}

console.log(gameCards)

        
for (card of gameCards){
    let newNode= document.createElement('div');
    newNode.className = 'card';
    newNode.innerHTML = cardString;
    document.body.appendChild(newNode);
}





