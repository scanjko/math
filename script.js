

function randNum(min,max){

    min = Math.ceil(min);
    max = Math.ceil(max);

    return Math.ceil(Math.random() *  (max - min) + min); 

}


let randButton = document.querySelector('.btn-rand');
let firstNum = document.querySelector('.first-num');
let secondNum = document.querySelector('.second-num');
let select = document.querySelectorAll('select');
let resultObj = {
    operation:'',
    rangeFirstNum:'',
    rangeSecondNum:'',
    firstNum:0,
    secondNum:0,
    result:0,

};
let resultsArray = [];


randButton.addEventListener('click', () => {
    
    firstNum.textContent = randNum(20,30);
    secondNum.textContent = randNum(10,20);

});

select.forEach(element => {
    element.addEventListener('change', (e) => {

        console.log(e.target.value)
    })
});


/*toDO: 
-   save your score /Name/
-   range selector 10-20; 30-40...
-   results in object
-   score list (need to figure out how to save scors in database - maybe fireBase)


*/
