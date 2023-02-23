let palabra;
        palabra = prompt('Ingrese culaquiera de estas palabras (casa, mesa, perro, gato) para traducirlas al ingles');
        switch (palabra) {
            case 'casa':
                document.write('La traduccion de la palabra seleccionada es: house');
                break;
            case 'mesa':
                document.write('La traduccion de la palabra seleccionada es: table');
                break;
            case 'perro':
                document.write('La traduccion de la palabra seleccionada es: dog');
                break;
            case 'gato':
                document.write('La traduccion de la palabra seleccionada es: cat');
                break;
            default:
                document.write('Solo puedes traducir las palabras (casa, mesa, perro, gato)');
            }