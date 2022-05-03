// コマンド一覧
const command = ["console.log()","alert()","getElementById()","querySelector()","addEventListener()","isArray()","eval()","isFinite()","isNaN()","parseFloat()","parseInt()","decodeURI()","decodeURIComponent()","encodeURI()","encodeURIComponent()","Object()","Function()","Boolean()","Symbol()","filter()","map()","find()","forEach()","some()","every()","reduce()","includes()"];

// 音源
const bgSound = new Audio("musics/bg.mp3");
const clickSound = new Audio("musics/click.mp3");
const typingSound = new Audio("musics/typing.mp3");
const typoSound = new Audio("musics/typo.mp3");
const timeUpSoucnd = new Audio("musics/timeup.mp3");

// 要素取得
const getStartScreen = document.querySelector(".start__wrapper");
const getEndScreen = document.querySelector(".end__wrapper");
const startButton = document.querySelector("label");
const replayButton = document.querySelector("button");
const commandAnswer = document.getElementById("command-answer");
const commandArea = document.getElementById("command");

// カウント
let count = 0;
let timeCount = 60;
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

// スタート画面
startButton.addEventListener("click",()=>{
    getStartScreen.style.display="none";
    clickSound.play();
    bgSound.play();
    bgSound.loop = true;
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

// コマンドリセッt
const commandReset = () => {
    let commandRand = Math.floor(Math.random()*command.length);
    let commandArray = command[commandRand];
    let commandLength = commandArray.length;
    let commandResult = "";
    commandAnswer.innerHTML = commandArray;
    commandArray = [...commandArray];
    return [commandLength,commandResult,commandArray]
}
let [answerLength,typingResult,answer] = commandReset();

// タイピングゲーム処理
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
                count = 0;
                success.innerHTML = ++successCount;
                [answerLength,typingResult,answer] = commandReset();
            }
        }else{
            typoSound.play();
            typo.innerHTML = typoCount;
            commandAnswer.classList.add("bg--red");
            typoCount++
        }        
    }
});

// リプレイ
replayButton.addEventListener("click",()=>{
    location.reload();
});