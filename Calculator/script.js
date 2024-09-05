let num = "";
let memoryValue = 0;
let buttons = document.querySelectorAll('.button');

//button clicks:
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{   
    const buttonValue = e.target.innerHTML;
    console.log("Button clicked:" + buttonValue); 
    handleInput(buttonValue);
    });
});

//for keyboard inputs:
document.addEventListener('keydown', (e)=>{
    const key = e.key;
    console.log("Key pressed: " +key);
if(/[0-9]/.test(key) || ['+','-','*','/'].includes(key)){
        handleInput(key); }
        else if(key === 'Enter'){
            handleInput('=');
        }
        else if(key === 'Escape'){
            handleInput('C');
        }
        else if(key === 'Backspace'){
            handleInput('C');
        }
        else if(key === '.'){
            handleInput('.');
        }
    });

//operations:
function handleInput(input){
    switch(input){
        case '=': 
            num = eval(num);
            console.log("Result:"+ num);
            document.querySelector('input').value = num;
            break;
        case 'C':
            console.log("Clearing Display");
            num= "";
            document.querySelector('input').value= num;
            break;
        case 'M+': 
            console.log("Adding to memory: " + num);
            memoryAdd(num);
            document.querySelector('input').value = num;
            console.log("Memory value after M+ :" + memoryValue);
            break;
        case 'M-':
            console.log("Substracting from memory:" +num);
            memorySub(num);
            document.querySelector('input').value = num;
            console.log("Memory after M- :"+memoryValue);
            break;
        case 'MR':
            console.log("Recalling memory value: "+ num);
            memoryRecall(num); 
            document.querySelector('input').value = num;
            break;
        case 'MC':
            console.log("Clearing memory");
            memoryClear(num);
            document.querySelector('input').value = num;
            console.log("Memory value after MC: "+ memoryValue);
            break;
        default: 
            num += input;
            console.log("Updated expresiion: "+num);
            document.querySelector('input').value = num;
    }
};

//memory functions:
function memoryAdd(currentValue){
if(!isNaN(currentValue)){
    memoryValue += parseFloat(currentValue);
}
console.log("Memory Add: Current Value ="+ currentValue +", Memory Value =" +memoryValue);
};

function memorySub(currentValue){
    if(!isNaN(currentValue)){
        memoryValue -= parseFloat(currentValue);
    }
    console.log("Memory Sub: Current Value ="+currentValue+", Memory Value ="+memoryValue);
};

function memoryRecall(){
    console.log("Memory Recall: Memory Value ="+memoryValue);
    return memoryValue.toString();
};

function memoryClear(){
    console.log("Memory Cleared: Memory Value =" +memoryValue);
    memoryValue = 0;
    };

