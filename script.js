const addBtn = document.querySelector(".btn");
const textInput = document.querySelector(".text");
const numberInput = document.querySelector(".number");
const newList = document.querySelector(".newList");
const imageInput = document.querySelector(".image");

addBtn.addEventListener("click", () => {
  addNewList();
});

numberInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addNewList();
  }
});

function addNewList() {
  if (textInput.value !== "" && numberInput.value !== "" && imageInput !== "") {
    const h4 = document.createElement("h4");
    h4.style.display = "flex";
    h4.style.marginTop = "-5px";
    h4.style.marginLeft = "40px";
    h4.innerHTML = `<h3 class="nurbiyke">${textInput.value}</h3>
       <h2> ${numberInput.value}</h2>
    <img src=${imageInput.value} alt="">
        `; //</br>
    newList.append(h4);

    textInput.value = "";
    numberInput.value = "";
    textInput.style.border = "";
    numberInput.style.border = "";
    imageInput.value = "";
  }
}