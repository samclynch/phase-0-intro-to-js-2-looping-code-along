// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log (`I'm ${age} years old. Happy birthday to me!`);
    
// }

// const gifts = ["teddy bear", "drone", "doll"];
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }
// wrapGifts(gifts);

// const cards = (["Ada", "Brendan", "Ali"], "birthday")
// function writeCards(name, event) {
//     for (let i = 0; i < cards.length; i++ ) {
//         cards.push(event)
//         console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
//         debugger;
//     }
//     return cards
// }
// writeCards(cards);

// myArray = [];
// function writeCards(["Ada", "Brendan", "Ali"], "birthday") {
//     for (let i = 0; i < myArray.length; i++) {
//         console.log(`Thank you, ${[i]}, for the wonderful ${[i]} gift!`)
//         debugger;
//     }
//     return myArray
// }
function writeCards(listFriends, celebratedDay){
    let card = [];
    for (let i=0; i < listFriends.length; i++){
        card.push(`Thank you, ${listFriends[i]}, for the wonderful ${celebratedDay} gift!`)
	    debugger;
    }
    return card;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

// let countdown = 10;
// while (countdown >= 0) {
//   console.log(countdown--);
//   debugger;
// }

function countDown() {
    let countDown = 10
	while (countDown >= 0) {
		console.log(countDown--);
        debugger;
	}
	return countDown
}
countDown(10)
