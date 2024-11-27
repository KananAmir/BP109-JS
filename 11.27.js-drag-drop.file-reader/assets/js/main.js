// drag drop

const dragItem = document.querySelector(".drag-item");
const dropZone = document.querySelector(".drop-zone");

dragItem.addEventListener("dragstart", function (e) {
  //   console.log("dragstart");
  console.log(e);
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
});
dragItem.addEventListener("dragend", function (e) {
  //   console.log("dragend");
  e.target.classList.remove("hide");
});
dragItem.addEventListener("drag", function (e) {
  //   console.log("dragging");
});

dropZone.addEventListener("dragenter", function (e) {
  e.preventDefault();
  //   console.log("dragenter");
});
dropZone.addEventListener("dragover", function (e) {
  e.preventDefault();
  //   console.log("dragover");
});
dropZone.addEventListener("dragleave", function () {
  console.log("dragleave");
});
dropZone.addEventListener("drop", function (e) {
  //   console.log("drop");
  const id = e.dataTransfer.getData("text/plain");

  const dragable = document.getElementById(id);

  e.target.appendChild(dragable);
});
