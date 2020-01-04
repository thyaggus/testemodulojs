import meuModulo from './dependencia.js';

export default function modulo() {

    function nome() {
        return meuModulo().quemSouEu();
    }

    function dobroPi() {
        return meuModulo().dobro(3.1415296);
    }

    return {
        nome,
        dobroPi
    };
}