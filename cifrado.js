// Cifrado César
function cifrarCesar(texto, desplazamiento) {
  return texto.replace(/[a-z]/gi, (char) => {
      const inicio = char === char.toLowerCase() ? 97 : 65;
      return String.fromCharCode(((char.charCodeAt(0) - inicio + desplazamiento) % 26) + inicio);
  });
}

function descifrarCesar(texto, desplazamiento) {
  return texto.replace(/[a-z]/gi, (char) => {
      const inicio = char === char.toLowerCase() ? 97 : 65;
      return String.fromCharCode(((char.charCodeAt(0) - inicio - desplazamiento + 26) % 26) + inicio);
  });
}

function cifrarVigenere(texto, clave) {
  let resultado = '';
  let indiceClave = 0;

  for (let i = 0; i < texto.length; i++) {
      const char = texto[i];

      // Solo ciframos letras
      if (/[a-zA-Z]/.test(char)) {
          const base = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
          const textoIndex = char.charCodeAt(0) - base;
          const claveIndex = clave[indiceClave % clave.length].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);

          const nuevoChar = String.fromCharCode(((textoIndex + claveIndex) % 26) + base);
          resultado += nuevoChar;

          // Avanzamos el índice de la clave
          indiceClave++;
      } else {
          // Si no es una letra, lo agregamos sin cambios
          resultado += char;
      }
  }

  return resultado;
}


function descifrarVigenere(texto, clave) {
  let resultado = '';
  let indiceClave = 0;

  for (let i = 0; i < texto.length; i++) {
      const char = texto[i];

      // Solo desciframos letras
      if (/[a-zA-Z]/.test(char)) {
          const base = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
          const textoIndex = char.charCodeAt(0) - base;
          const claveIndex = clave[indiceClave % clave.length].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);

          const nuevoChar = String.fromCharCode(((textoIndex - claveIndex + 26) % 26) + base);
          resultado += nuevoChar;

          // Avanzamos el índice de la clave
          indiceClave++;
      } else {
          // Si no es una letra, lo agregamos sin cambios
          resultado += char;
      }
  }

  return resultado;
}



module.exports = {
  cifrarCesar,
  descifrarCesar,
  cifrarVigenere,
  descifrarVigenere
};