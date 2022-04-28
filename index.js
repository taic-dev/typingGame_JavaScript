const commandAnswer = document.getElementById("command-answer");
const commandArea = document.getElementById("command");
let command = "console.log()";

// const commandSelect = (command) => {
    let answer = command;
    let answerLength = answer.length;
    console.log(answerLength);
    answer = [...answer];
    commandAnswer.innerHTML = command;
    let typingResult = "";
    let count = 0;
// }
// commandSelect(command);
window.addEventListener("keydown",(e)=>{
    if(answerLength > count){
            if(answer[count] == e.key || "Shift" == e.key){
                if("Shift" == e.key) return;
                typingResult += e.key
                commandArea.innerHTML = typingResult;
                commandAnswer.classList.remove("bg--red");
                count++
            }else{
                console.log(answer[count]);
                console.log(e.key)
                console.log("失敗");
                commandAnswer.classList.add("bg--red");
            }        
    }else{
        command = "change";
        console.log(command)
        // commandSelect();
    }
});