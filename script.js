
const Num = {
    operation :'+',
    firstNumMin :0,
    firstNumMax:0,
    secondNumMin :0,
    secondNumMax:0,
    firstNumVal:0,
    secondNumVal:0,
    userInput:0,
    result: function(){
        return this.firstNum + this.secondNum;
    }

}

function randNum(min,max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.ceil(Math.random() *  (max - min) + min); 

};
function updateSelection(num){
    const elClass = num.classList.value;
    if (elClass == 'first-num'){
        let rand = randNum(Num.firstNumMin,Num.firstNumMax);
        firstNum.textContent = rand;
        Num.firstNumVal =rand;

    }
    if (elClass == 'second-num'){
        let rand = randNum(Num.secondNumMin,Num.secondNumMax);
        secondNum.textContent = rand;
        Num.secondNumVal = rand;

    }

}

let nextButton = document.querySelector('.btn-next');
let checkButton = document.querySelector('.btn-check');
let firstNum = document.querySelector('.first-num');
let secondNum = document.querySelector('.second-num');
let select1 = document.querySelector('.first');
let select2 = document.querySelector('.second');
let userInput = document.querySelector('.input-num');
let resultsArray = [];

select1.addEventListener('change', (e)=>{
    const numRange = e.target.value.split('-');

    Num.firstNumMin = numRange[0];
    Num.firstNumMax = numRange[1];
    updateSelection(firstNum);
});

select2.addEventListener('change', (e)=>{
    const numRange = e.target.value.split('-');

    Num.secondNumMin = numRange[0];
    Num.secondNumMax = numRange[1];
    updateSelection(secondNum);
});

nextButton.addEventListener('click', (e)=>{

  
    Num.userInput = userInput.value;
    Num.result();
    resultsArray.push(Num)
    console.log(resultsArray)
});





/*toDO: 
-   save your score /Name/
-   range selector 10-20; 30-40...
-   results in object
-   score list (need to figure out how to save scors in database - maybe fireBase)


*/
