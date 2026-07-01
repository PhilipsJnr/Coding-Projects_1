// const cards = document.querySelector(".card");
// const lists = document.querySelector(".list");

// for (const card of cards) {
//   card.addEventListener("dragstart", dragStart);
//   card.addEventListener("dragend", dragEnd);
// }

// // the meaning of cards used in the parameter of the for loop means that a variable card has been declared and it can be anything so it is a dom gotten from each of the the card class stated in the cards variable declared
// for (const list of lists) {
//   list.addEventListener("dragover", dragOver);
//   list.addEventListener("dragenter", dragEnter);
//   list.addEventListener("dragleave", dragLeave);
//   list.addEventListener("drop", dragDrop);
// }

// function dragStart(e) {
//   //this allows the drop location to know which element is being moved when you remove it
//   e.dataTransfer.setData("text/plain", this.id);
// }

// function dragEnd() {
//   console.log("Drag Ended");
// }

// function dragOver(e) {
//   //this line below is important because by default, browsers don't allow you to drop elements into other elements
//   e.preventDefault();
// }

// //dragenter affects when you drag a draggable over a div
// function dragEnter(e) {
//   e.preventDefault();

//   this.classList.add("over");
// }

// function dragLeave(e) {
//   this.classList.remove("over");
// }

// function dragDrop(e) {
//   const id = e.dataTransfer.getData("text/plain");
//   const card = document.getElementById(id);

//   this.appendChild(card);
//   this.classList.remove("over");
// }

const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");

cards.forEach((card) => {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
});

lists.forEach((list) => {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", dragDrop);
});

//the draggable elements starts to be dragged
function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.dataTransfer.effectAllowed = "move";
}

//the draggable item stops being dragged
function dragEnd(e) {
  console.log("drag ended");
}

//the container has a draggable item being dragged over it. We use prevent default because on default modem, drop won't fire and the draggable won't drop on the desired element
function dragOver(e) {
  e.preventDefault();
}

//highligh potential drop target when the draggable enters it
function dragEnter(e) {
  e.preventDefault();
  e.currentTarget.classList.add("over");
}

//the element has a draggable element leaving it
function dragLeave(e) {
  if (e.currentTarget.contains(e.relatedTarget)) return;
  e.currentTarget.classList.remove("over");
}

function dragDrop(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const card = document.getElementById(id);

  if (card) {
    e.currentTarget.appendChild(card);
    e.currentTarget.classList.remove("over");
  }
}
