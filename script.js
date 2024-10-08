let numbers = document.getElementsByClassName('digit-number');

// DISPLAY ARITHMETIC ON CALCULATOR SCREEN 
let sumContainer = document.querySelector('.input-value');
let total = document.querySelector('.total');

// OPERATOR VARIABLES
let multiply = document.querySelector('#multiply');
let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract');
let divide = document.querySelector('#divide');
let modulo = document.querySelector('#modulo');
let equalSign = document.getElementById('equal-sign');

// DELETE VALUES FROM SCREEN
let deleteAllButton = document.querySelector('#delete-all');
let deleteButton = document.querySelector('#delete');

// CONVERT NUMBERS COLLECTION TO ARRAY to make it iterable
numbers = Array.from(numbers);
let variable = '';

// TARGET EVERY NUMBER UPON THE CLICK EVENT, to make the value on the screeb = to the number clicked
numbers.forEach(element => {
  element.addEventListener('click', (e) => {
    variable+= e.target.textContent;
    sumContainer.textContent = variable;
  });
 
});

multiply.addEventListener('click', (e) => {
  let lastChar = sumContainer.textContent.slice(-1);
  if (Number.isNaN(parseInt(lastChar))){
    return
  } else if (lastChar === "*" || lastChar === 'x') {
    return
  } else {
    sumContainer.textContent+= multiply.textContent;
    variable += '*';
  }
});

add.addEventListener('click', (e) => {
  let lastChar = sumContainer.textContent.slice(-1);
  if (Number.isNaN(parseInt(lastChar))){
    return
  } else if (lastChar === '+') {
    return 
  } else {
    sumContainer.textContent+= add.textContent;
    variable += add.textContent;
  }
});

subtract.addEventListener('click', (e) => {
  let lastChar = sumContainer.textContent.slice(-1);
  if (!lastChar || lastChar === "*" || lastChar === "x") {
    sumContainer.textContent+= subtract.textContent;
    variable += subtract.textContent;
  } else if (Number.isNaN(parseInt(lastChar)) || lastChar === "-"){
    return
  }  else {
    sumContainer.textContent+= subtract.textContent;
    variable += subtract.textContent;
  }
});

divide.addEventListener('click', (e) => {
  let lastChar = sumContainer.textContent.slice(-1);
  if (Number.isNaN(parseInt(lastChar))) {
    return
  } else if (lastChar === "/") {
    return
  } else  {
    sumContainer.textContent+= '/';
    variable += '/';
  }

});

modulo.addEventListener('click', (e) => {
  let lastChar = sumContainer.textContent.slice(-1);
  if (Number.isNaN(parseInt(lastChar))) {
    return
  }else if (lastChar === "%") {
    return
  } else {
    sumContainer.textContent+= modulo.textContent;
    variable += modulo.textContent;
  }
});

// DELETE ALL VALUES ON SCREEN AND IN THE EXPRESSION 
deleteAllButton.addEventListener('click', () => {
   sumContainer.textContent = '';
   variable = "";
   total.textContent = '0';
});

// DELETE LAST VALUE AND RECALCULATE
deleteButton.addEventListener('click', () => {
  sumContainer.textContent = sumContainer.textContent.slice(0, -1);
  variable = sumContainer.textContent;
});

equalSign.addEventListener('click', (e) => {
  let result = calculate(variable);
  if (calculate(variable)) {
    if (!Number.isInteger(result)) {
      result = result.toFixed(2);
    }
    total.textContent = new Intl.NumberFormat().format(result);
    variable = result;
  } else {
    return
  }
})

function calculate(expression) {
  return new Function('return ' + expression)();
}