
const displayResult = document.querySelector('.button-js');
const currentResult = document.querySelector('.js-result');

const buttons = [
  {id: 0, btn: 'ac', color: 'lightgreen'},
  {id: 1, btn: 'del', color: 'lightgreen'},
  {id: 2, btn: '%', color: 'lightgreen'},
  {id: 3, btn: '/', color: 'lightgreen'},
  {id: 4, btn: '7'},
  {id: 5, btn: '8'},
  {id: 6, btn: '9'},
  {id: 7, btn: '*', color: 'lightgreen'},
  {id: 8, btn: '4'},
  {id: 9, btn: '5'},
  {id: 10, btn: '6'},
  {id: 11, btn: '-', color: 'lightgreen'},
  {id: 12, btn: '3'},
  {id: 13, btn: '2'},
  {id: 14, btn: '1'},
  {id: 15, btn: '+', color: 'lightgreen'},
  {id: 16, btn: '00'},
  {id: 17, btn: '0'},
  {id: 18, btn: '.'},
  {id: 19, btn: '=', bgColor: '#d56a15'},
]

let calculator = JSON.parse(localStorage.getItem('calculator'))||'';
console.log(calculator);
currentResult.innerHTML = calculator;
calculatorApp()

function calculatorApp() {
  let html = '';

  buttons.forEach((digit) => {
    html += `
    <button class="btn-js btn-css" style = "color:${digit.color}; background-color:${digit.bgColor} ;" data-id="${digit.btn}">${digit.btn}</button>
    `

    displayResult.innerHTML = html;
});

const allBtn = document.querySelectorAll('.btn-js');

    allBtn.forEach((btns) => {
   
        btns.addEventListener('click', (btn) => {
        const dataId = btn.currentTarget.dataset.id;
        console.log(dataId);

        if (dataId === 'ac') {
        calculator = '';
        currentResult.innerHTML = calculator;  
        storage()
        return;
       
        } 
        else if (dataId === 'del') {
          calculator = calculator.substring(0, calculator.length-1);
          currentResult.innerHTML = calculator; 
          storage()
          return; 
        }
        else if(dataId === '='){
          calculator = eval(calculator);
          currentResult.innerHTML = calculator; 
          storage()
          return;
        }

        displayScreen(dataId)
        })
    
    })

}


function displayScreen(value) {
  calculator += value;
  currentResult.innerHTML = calculator;
  storage()
}


function storage() {
  localStorage.setItem('calculator', JSON.stringify(calculator))
}
