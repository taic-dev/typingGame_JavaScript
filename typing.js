// start_screen
const bgMusic = new Audio("musics/bg.mp3");
const clickSound = new Audio("musics/click.mp3");
const typingSoucnd = new Audio("musics/typing.mp3");

const getFooter = document.querySelector("footer");
const getStartScreen = document.querySelector(".start__wrapper");
const button = document.querySelector("label");
let startFlag = document.querySelector("input").checked;
console.log(startFlag);

button.addEventListener("click",()=>{
    clickSound.play();
    bgMusic.play();
    getStartScreen.style.display="none";
    startFlag = true;
});

// typing_game
const commandAnswer = document.getElementById("command-answer");
const commandArea = document.getElementById("command");
let command = [
    "console.log()",
    "getElementById()",
    "querySelector()",
    "addEventListener()",
    "isArray()"
];
let commandRand = Math.floor(Math.random()*command.length)
console.log(commandRand)
    let answer = command[commandRand];
    commandAnswer.innerHTML = answer;
    let answerLength = answer.length;
    console.log(answer)
    console.log(answerLength);
    answer = [...answer];
    let typingResult = "";
    let count = 0;
    let typoCount = 0;


window.addEventListener("keydown",(e)=>{
    console.log(startFlag);
    if(answerLength > count && startFlag == true){
        if(answer[count] == e.key || "Shift" == e.key){
            if("Shift" == e.key) return;
            typingResult += e.key
            commandArea.innerHTML = typingResult;
            commandAnswer.classList.remove("bg--red");
            count++
            
            if(answerLength == count){
                typingSoucnd.play();
                commandAnswer.innerHTML = "";
                commandArea.innerHTML = "";
                command = ["console.log()","getElementById()","querySelector()","addEventListener()","isArray()"];
                commandRand = Math.floor(Math.random()*command.length)
                answer = command[commandRand];
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
        }else{
            typoCount++
            console.log(typoCount)
            console.log("失敗");
            commandAnswer.classList.add("bg--red");
        }        
    }
});

// 初期化処理を作成する
// タイポカウント
// タイム計測