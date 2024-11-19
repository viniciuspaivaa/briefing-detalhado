const lessOperator = document.getElementsByClassName('less-qntd')[0];
const moreOperator = document.getElementsByClassName('more-qntd')[0];
let actualQntd = document.getElementsByClassName('actual-qntd')[0];

let counter = 1;

moreOperator.addEventListener('click', () => {
    counter ++;
    actualQntd.innerText = counter.toString();
})

lessOperator.addEventListener('click', () => {
    if(counter == 1){return;}
    counter --;
    actualQntd.innerText = counter.toString();
})
