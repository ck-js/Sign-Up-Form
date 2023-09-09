const passwordInput1 = document.getElementById('pwd');
const passwordInput2 = document.getElementById('confirm-pwd');

let string1 = '';
let string2 = '';

passwordInput1.addEventListener('input', () => {
    const input = passwordInput1.value;
    string1 = input;
});

passwordInput2.addEventListener('input', () => {
    const input = passwordInput2.value;
    string2 = input;
})

if (string1 === string2) {
    
}
