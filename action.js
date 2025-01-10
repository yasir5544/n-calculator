let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let num1 = '';
let num2 = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (value === 'C') {
            num1 = '';
            num2 = '';
            operator = '';
            display.value = '';
        } else if (value === '&lt;') {
            if (num1 !== '') {
                num1 = num1.slice(0, -1);
                display.value = num1;
            }
         } else if (value === '=') {
            if (num1 !== '' && num2 !== '' && operator !== '') {
                let result = eval(num1 + operator + num2);
                display.value = result;
                num1 = result.toString();
                num2 = '';
                operator = '';
            }
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (num1 !== '') {
                operator = value;
                display.value = num1+operator;
            }
        } else {
            if (operator === '') {
                num1 += value;
                display.value = num1;
            } else {
                num2 += value;
                display.value = num1+operator+num2;
            }
        }
    });
});
