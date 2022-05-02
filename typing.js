// コマンド一覧
const getCommand = () => {
    return ["console.log()","alert()","getElementById()","querySelector()","addEventListener()","isArray()","eval()","isFinite()","isNaN()","parseFloat()","parseInt()","decodeURI()","decodeURIComponent()","encodeURI()","encodeURIComponent()","Object()","Function()","Boolean()","Symbol()","filter()","map()","find()","forEach()","some()","every()","reduce()","includes()"];
}
const command = getCommand();

// 音源
const bgSound = new Audio("musics/bg.mp3");
const clickSound = new Audio("musics/click.mp3");
const typingSound = new Audio("musics/typing.mp3");
const typoSound = new Audio("musics/typo.mp3");
const timeUpSoucnd = new Audio("musics/timeup.mp3");

const getStartScreen = document.querySelector(".start__wrapper");
const getEndScreen = document.querySelector(".end__wrapper");
const startButton = document.querySelector("label");
const replayButton = document.querySelector("button");

const commandAnswer = document.getElementById("command-answer");
const commandArea = document.getElementById("command");

// カウント
let count = 0;
let timeCount = 10;
let typoCount = 0;
let successCount = 0;

// フラグ
let startFlag = document.querySelector("input").checked;
let timeFlag = 0;

// タイム / スコアエリア取得
let time = document.querySelector("time");
let typo = document.getElementById("typo-area");
let success = document.getElementById("success-area");

// タイム / スコア初期値
time.innerHTML = timeCount;
typo.innerHTML = 0;
success.innerHTML = 0;

// ボリューム
const vol = 0.1;
bgSound.volume = vol;
clickSound.volume = vol;
typingSound.volume = vol;
typoSound.volume = vol;
timeUpSoucnd.volume = vol;


startButton.addEventListener("click",()=>{
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

            getEndScreen.classList.add("is--show");
        }
    },1000);
});

let commandRand = Math.floor(Math.random()*command.length)
let answer = command[commandRand];
commandAnswer.innerHTML = answer;
let answerLength = answer.length;
answer = [...answer];
let typingResult = "";

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
                
                // command = getCommand();
                
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

replayButton.addEventListener("click",()=>{
    location.reload();
});