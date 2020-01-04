export default function meuModulo() {

    function quemSouEu() {
        return 'Tiago';
    }

    function dobro(num) {
        return num * 2;
    }

    return {
        quemSouEu,
        dobro
    };
}