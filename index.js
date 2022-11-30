function writeCards(names, adjective) {
    let allCards = []
    for(let name of names){
        allCards.push(`Thank you, ${name}, for the wonderful ${adjective} gift!`)
    }
    console.log(allCards)
    return allCards
}

function countDown(num) {
    while(num >= 0) {
        console.log(num)
        num--
    }
}

countDown(4)