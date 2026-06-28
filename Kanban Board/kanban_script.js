const cards = document.querySelector(".card");
const lists = document.querySelector(".list");

for (const card of cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}

// the meaning of cards used in the parameter of the for loop means that a variable card has been declared and it can be anything so it is a dom gotten from each of the the card class stated in the cards variable declared
for (const list of lists) {
}
