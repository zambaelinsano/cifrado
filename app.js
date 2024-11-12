const cesarBtn = document.getElementById('cesar-btn');
const vigenereBtn = document.getElementById('vigenere-btn');
const textInputCesar = document.getElementById('text-cesar');
const shiftInput = document.getElementById('shift');
const keyInput = document.getElementById('key');
const resultTextareaCesar = document.getElementById('result-cesar');
const resultTextareaVigenere = document.getElementById('result-vigenere');
const decipherBtn = document.getElementById('decipher-btn');
const decipherVigenereBtn = document.getElementById('decipher-vigenere-btn');

// Lógica de selección entre Cifrado César y Vigenère
let currentCipher = 'cesar'; // Valor por defecto

// Función para cifrar y descifrar César
function cifrarCesar(text, desplazamiento) {
    return text.split('').map(char => {
        if (char.match(/[a-zA-Z]/)) {
            let code = char.charCodeAt(0);
            let offset = (char === char.toUpperCase()) ? 65 : 97;
            return String.fromCharCode(((code - offset + desplazamiento) % 26) + offset);
        }
        return char;
    }).join('');
}

function descifrarCesar(text, desplazamiento) {
    return cifrarCesar(text, -desplazamiento);
}

// Función para cifrar y descifrar Vigenère
function cifrarVigenere(text, clave) {
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-zA-Z]/)) {
            let code = char.charCodeAt(0);
            let offset = (char === char.toUpperCase()) ? 65 : 97;
            let keyChar = clave[keyIndex % clave.length];
            let keyCode = keyChar.toLowerCase().charCodeAt(0) - 97;
            result += String.fromCharCode(((code - offset + keyCode) % 26) + offset);
            keyIndex++;
        } else {
            result += char;
        }
    }
    return result;
}

function descifrarVigenere(text, clave) {
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-zA-Z]/)) {
            let code = char.charCodeAt(0);
            let offset = (char === char.toUpperCase()) ? 65 : 97;
            let keyChar = clave[keyIndex % clave.length];
            let keyCode = keyChar.toLowerCase().charCodeAt(0) - 97;
            result += String.fromCharCode(((code - offset - keyCode + 26) % 26) + offset);
            keyIndex++;
        } else {
            result += char;
        }
    }
    return result;
}

// Función para cifrar y descifrar
function cifrar() {
    const texto = textInputCesar.value;
    let resultado;
    if (currentCipher === 'cesar') {
        const desplazamiento = parseInt(shiftInput.value);
        if (isNaN(desplazamiento)) return alert('Por favor, introduce un desplazamiento válido.');
        resultado = cifrarCesar(texto, desplazamiento);
        resultTextareaCesar.value = resultado;
    } else if (currentCipher === 'vigenere') {
        const clave = keyInput.value;
        if (!clave) return alert('Por favor, introduce una clave de Vigenère.');
        resultado = cifrarVigenere(texto, clave);
        resultTextareaVigenere.value = resultado;
    }
}

function descifrar() {
    const texto = textInputCesar.value;
    let resultado;
    if (currentCipher === 'cesar') {
        const desplazamiento = parseInt(shiftInput.value);
        if (isNaN(desplazamiento)) return alert('Por favor, introduce un desplazamiento válido.');
        resultado = descifrarCesar(texto, desplazamiento);
        resultTextareaCesar.value = resultado;
    } else if (currentCipher === 'vigenere') {
        const clave = keyInput.value;
        if (!clave) return alert('Por favor, introduce una clave de Vigenère.');
        resultado = descifrarVigenere(texto, clave);
        resultTextareaVigenere.value = resultado;
    }
}

// Event Listeners
cesarBtn.addEventListener('click', cifrar);
vigenereBtn.addEventListener('click', cifrar);
decipherBtn.addEventListener('click', descifrar);
decipherVigenereBtn.addEventListener('click', descifrar);
