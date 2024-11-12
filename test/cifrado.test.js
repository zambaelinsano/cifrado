const assert = require('assert');
const { cifrarCesar, descifrarCesar, cifrarVigenere, descifrarVigenere } = require('../cifrado');


// Pruebas para Cifrado César
describe('Cifrado César', () => {
    it('debe cifrar correctamente el texto', () => {
        assert.strictEqual(cifrarCesar('abc', 3), 'def');
    });

    it('debe descifrar correctamente el texto', () => {
        assert.strictEqual(descifrarCesar('def', 3), 'abc');
    });

    it('debe devolver el texto original después de cifrar y descifrar', () => {
        const texto = 'hola';
        const desplazamiento = 4;
        const cifrado = cifrarCesar(texto, desplazamiento);
        const descifrado = descifrarCesar(cifrado, desplazamiento);
        assert.strictEqual(descifrado, texto);
    });
});

// Pruebas para Cifrado Vigenère

describe('Cifrado Vigenère', () => {
  it('debe cifrar correctamente el texto', () => {
    const resultado = cifrarVigenere('hola', 'clave');
    assert.strictEqual(resultado, 'fiib');  // Ajusta el valor esperado
  });

  it('debe descifrar correctamente el texto', () => {
    const resultado = descifrarVigenere('fiib', 'clave');
    assert.strictEqual(resultado, 'hola');
  });

  it('debe devolver el texto original después de cifrar y descifrar', () => {
    const texto = 'hola';
    const clave = 'clave';
    const cifrado = cifrarVigenere(texto, clave);
    const descifrado = descifrarVigenere(cifrado, clave);
    assert.strictEqual(descifrado, texto);
  });
});