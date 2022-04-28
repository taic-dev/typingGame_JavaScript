const commandAnswer = document.getElementById("command-answer");
const commandArea = document.getElementById("command");

let answer = "console.log";
answer = [...answer];
console.log(answer);
commandAnswer.innerHTML = "console.log()";
let typingResult = "";
window.addEventListener("keydown",(e)=>{
    console.log(answer[1]);
    console.log(e.key);
    typingResult += e.key
    commandArea.innerHTML = typingResult;
});