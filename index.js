const commandAnswer = document.getElementById("command-answer");
const commandArea = document.getElementById("command");
let command = ["console.log()","getElementById","querySelector"];
let commandRand = Math.floor(Math.random()*command.length)
console.log(commandRand)
// const commandSelect = (command) => {
    let answer = command[commandRand];
    commandAnswer.innerHTML = answer;
    console.log(answer)
    let answerLength = answer.length;
    console.log(answerLength);
    answer = [...answer];
    let typingResult = "";
    let count = 0;
// }

window.addEventListener("keyup",(e)=>{
    // commandSelect(command);
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
        commandAnswer.innerHTML = "";
        commandArea.innerHTML = "";
        answer = command[1];
        commandAnswer.innerHTML = answer;
        console.log(commandRand)
        // answer = command[commandRand];
        // console.log(answer)
        answerLength = answer.length;
        console.log(answerLength);
        answer = [...answer];
        typingResult = "";
        count = 0;
    }
});

// 初期化処理を作成する