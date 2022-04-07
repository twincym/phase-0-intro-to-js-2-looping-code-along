let cards = ["Guadalupe", "Ollie", "Aki"]
function writeCards(cards){
    const newCards = []
for (let i = 0; i< cards.length; i++) {
        let message = `Thank you, ${cards[i]}, for the wonderful surprise gift!`;
        newCards.push(message)
    }
    return newCards
}

let countingDown = 12
function countDown(countingDown){
    while (countingDown > -1) {
        console.log(countingDown--);
    }
}