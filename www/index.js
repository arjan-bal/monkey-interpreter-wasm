import * as wasm from "monkey-interpreter";

let interpreter = wasm.Wrapper.new()

const prompt = document.getElementById("prompt-input");
const pressedKeys = {};
const interestingKeys = ["Enter", "Shift"];

prompt.addEventListener("input", function () {
  this.style.height = this.scrollHeight + 'px';
})

prompt.addEventListener("keydown", function (event) {
  if (interestingKeys.includes(event.key)) {
    pressedKeys[event.key] = true;
  }
  // Ignore if shift + enter.
  if (pressedKeys["Enter"] && pressedKeys["Shift"]) {
    return;
  }
  if (event.key === "Enter") {
    event.preventDefault();
    const command = prompt.value;
    runCommand(command);
    prompt.value = '';
  }
});

prompt.addEventListener("keyup", function (event) {
  if (interestingKeys.includes(event.key)) {
    pressedKeys[event.key] = false;
  }
});


const history = document.getElementById("console-history");
const promptText = document.getElementsByClassName("prompt-text")[0]

function runCommand(command) {
  let output = interpreter.interpret(command);
  history.appendChild(createHistoryNode(command, output));
  prompt.scrollTop = prompt.scrollHeight;
}

// Keep focus on the prompt.
setInterval(() => {
  prompt.focus();

}, 3000);

function createHistoryNode(command, output) {
  let commandNode = createDivNode();
  commandNode.appendChild(promptText.cloneNode(true));
  commandNode.appendChild(createSpanNode(command));
  let outputNode = createParaNode(output);
  let newNode = document.createElement("command");
  newNode.appendChild(commandNode);
  newNode.appendChild(outputNode);
  return newNode;
}


function createDivNode() {
  return createStyledHistoryElement(null, "div")
}

function createSpanNode(text) {
  return createStyledHistoryElement(text, "span")
}

function createParaNode(text) {
  return createStyledHistoryElement(text, "p")
}

function createStyledHistoryElement(text, elementType) {
  let newNode = document.createElement(elementType);
  newNode.textContent = text;
  newNode.classList.add("console");
  newNode.classList.add("history-element");
  return newNode;
}