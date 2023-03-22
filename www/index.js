import * as wasm from "monkey-interpreter";

let interpreter = wasm.Wrapper.new()

const prompt = document.getElementById("prompt-input");
prompt.addEventListener("keyup", function (event) {
  console.log("here")
  if (event.key === "Enter") {
    const command = prompt.value;
    prompt.value = '';
    runCommand(command);
  }
});


const history = document.getElementById("console-history");

function runCommand(command) {
  history.appendChild(createParaNode(">> " + command));
  history.appendChild(createParaNode(interpreter.interpret(command)));
  prompt.scrollTop = prompt.scrollHeight;
}

// Keep focus on the prompt.
setInterval(() => {
  prompt.focus();

}, 3000);

function createParaNode(text) {
  let newNode = document.createElement("p");
  newNode.textContent = text;
  newNode.classList.add("console");
  newNode.classList.add("history-element");
  return newNode;
}