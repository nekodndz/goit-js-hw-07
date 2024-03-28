const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');


input.addEventListener('input', handleInput);

function handleInput(event) {
    const inputValue = event.target.value.trim();
    
    if (inputValue === '') {
    output.textContent = 'Anonymous';
    } else {
    output.textContent = inputValue;
    }
}