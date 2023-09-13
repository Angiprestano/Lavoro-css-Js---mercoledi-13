//
//
const todolist = document.getElementById("main-form");

todolist.addEventListener("submit", function (event) {
  event.preventDefault();
});
const swimmingInputField = document.getElementById("swimming");
const footballInputField = document.getElementById("football");
const rugbyInputField = document.getElementById("rugby");
const tennisInputField = document.getElementById("tennis");
const surfInputField = document.getElementById("Surf");
const volleyballInputField = document.getElementById("volleyball");

todoList.innerHTML = `
<p>${todoList.swimming} $ </p>
<p>${todoList.football} $</p>
<p>${todoList.rugby}$ </p>
<p>${todoList.tennis}$</p>
<p>${todoList.Surf}$</p>
<p>${todoList.volleyball}$</p>
<button onclick="TheSports(event)"> ELIMINA</button>
`;

const TheSports = {
  swimming: swimmingInputField.value,
  football: footballInputField.value,
  rugby: rugbyInputField.value,
  tennis: tennisInputField.value,
  Surf: surfInputField.value,
  Volleyball: surfInputField.value,
};

const TheSports = document.createElement("form");
todolist.classList.add("TheSports");
