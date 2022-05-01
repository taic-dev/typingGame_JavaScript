// start_screen
const bgSound = new Audio("musics/bg.mp3");
const clickSound = new Audio("musics/click.mp3");
const typingSound = new Audio("musics/typing.mp3");
const typoSound = new Audio("musics/typo.mp3");
const timeUpSoucnd = new Audio("musics/timeup.mp3");

const getFooter = document.querySelector("footer");
const getStartScreen = document.querySelector(".start__wrapper");
const button = document.querySelector("label");
let startFlag = document.querySelector("input").checked;
let time = document.querySelector("time");
let typo = document.getElementById("typo-area");
let success = document.getElementById("success-area");
let timeCount = 60;
let timeFlag = 0;
bgSound.volume = 0.1;
time.innerHTML = timeCount;
typo.innerHTML = 0;
success.innerHTML = 0;

button.addEventListener("click",()=>{
    clickSound.play();
    bgSound.play();
    bgSound.loop = true;
    getStartScreen.style.display="none";
    startFlag = true;

    let countDown = setInterval(() => {
        timeCount--;
        time.innerHTML = timeCount;
        if(timeCount == 0){
            clearInterval(countDown);
            time.innerHTML = "終了";
            timeFlag = 1;
            timeUpSoucnd.play();
            bgSound.pause();
            clickSound.pause();
            typingSound.pause();
            typoSound.pause();
        }
    },1000);
});

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
    let answer = command[commandRand];
    commandAnswer.innerHTML = answer;
    let answerLength = answer.length;
    answer = [...answer];
    let typingResult = "";
    let count = 0;
    let typoCount = 0;
    let successCount = 0;

    window.addEventListener("keydown",(e)=>{
        if(answerLength > count && startFlag == true && timeFlag == 0){
            if(answer[count] == e.key || "Shift" == e.key){
                if("Shift" == e.key) return;
                typingResult += e.key
                commandArea.innerHTML = typingResult;
                commandAnswer.classList.remove("bg--red");
                count++
                
                if(answerLength == count){
                    typingSound.play();
                    commandAnswer.innerHTML = "";
                    commandArea.innerHTML = "";
                    command = ["console.log()","getElementById()","querySelector()","addEventListener()","isArray()"];
                    commandRand = Math.floor(Math.random()*command.length)
                    answer = command[commandRand];
                    commandAnswer.innerHTML = answer;
    
                    answerLength = answer.length;
                    console.log(answerLength);
                    answer = [...answer];
                    typingResult = "";
                    count = 0;
                    successCount++
                    success.innerHTML = successCount;
                }
            }else{
                typoSound.play();
                typoCount++
                typo.innerHTML = typoCount;
                commandAnswer.classList.add("bg--red");
            }        
        }
    });

// 初期化処理を作成する
// タイム計測
// 