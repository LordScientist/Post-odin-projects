// Memory
let currentInput = "";
let previousInput = "";
let operator = "";

// Selecting Elements
let number = document.querySelectorAll(".number");
let symbol = document.querySelectorAll(".symbol");
let equal = document.querySelector("#equal");
let output = document.querySelector(".output");
let clear = document.querySelector("#clear");
let calculation = document.querySelector('.calculation')

// Number Loop
number.forEach
    (
        button => 
            {
                button.addEventListener('click',(package) =>
                    {
                        let value = package.target.textContent;
                        currentInput+= value;
                        output.textContent = currentInput;
                    })
            }
    )

//  Operator Loop
symbol.forEach
    (
        button =>
        {
            button.addEventListener('click',(package) => 
                {
                    let chosenOperator = package.target.dataset.action;
                    if(previousInput !== '' && currentInput !== '')
                        {
                            equal.click();
                        }

                    operator = chosenOperator;

                                     
                    
                    if(chosenOperator === '+' || chosenOperator === '-' || chosenOperator === '/' || chosenOperator === '*')
                        {
                            previousInput = currentInput;
                            calculation.textContent = previousInput + " " + operator;
                            miniDisplay = calculation.textContent;
                            currentInput = ''; 
                                                       
                        }


                })
        }
    )

// Calculations
equal.addEventListener('click',() =>
    {
        if (previousInput === '' || currentInput === '')
            {
                return;
            }
        

        let num1 = parseFloat(previousInput);
        let num2 = parseFloat(currentInput);
        let result = 0
       
        switch(operator)
            {
                case '+' :
                    result = num1 + num2;                 
                     break;

                case '-' :
                    result = num1 - num2;
                    break;

                case '*' :
                    result = num1 * num2;
                    break;

                case '/' :
                    if(num2 === 0)
                        {
                            alert("You cannot divide by zero");
                            operator = '';
                            currentInput = '';
                            previousInput = '';
                            output.textContent = 0;
                            return;
                        }
                    result = num1/num2;
                    
                    break;

                default:        
            }

            if (result % 1 !== 0 )
                    {
                        result = parseFloat(result.toFixed(4));
                    }

            if (isNaN(result))
                {
                    alert("Invalid Computation");
                    currentInput = "";
                    operator = "";
                    previousInput = "";
                    output.textContent = "";
                    calculation.textContent = "";
                    return;

                }

            // secondNum catches the value inputted and use it before it gets overwritten
            let secondNum = currentInput;
            output.textContent = result;
            currentInput = result.toString();
            miniDisplay += secondNum;
            calculation.textContent = miniDisplay;
            previousInput = "";
            operator = "";
    })

// This is the power of the clear button
clear.addEventListener('click',() => {
    operator = '';
    currentInput = '';
    previousInput = '';
    output.textContent = "";
    calculation.textContent = "";
})

