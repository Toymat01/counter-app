let count = 0;
const userInput = document.querySelector('h2');

function changeCount(num){
    count += num;
    userInput.textContent= count;
}

function Reset(){
    count = 0
    userInput.textContent = count;
}