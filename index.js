const mybtn = document.getElementById("mybtn");
const mylbl1 = document.getElementById("mylbl1");
const mylbl2 = document.getElementById("mylbl2");
const mylbl3 = document.getElementById("mylbl3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

mybtn.onclick = function(){
    randomNum1 = Math.floor(Math.random()* max)+min;
    mylbl1.textContent = randomNum1;

    randomNum2 = Math.floor(Math.random()* max)+min;
    mylbl2.textContent = randomNum2;

    randomNum3 = Math.floor(Math.random()* max)+min;
    mylbl3.textContent = randomNum3;
}