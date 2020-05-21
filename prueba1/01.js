const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola Mundo con Vue',
        verduras: ['Manzana', 'Platano', 'Pera'],
        frutas: [
            { nombre: 'Tomate', cantidad: 10 },
            { nombre: 'Apio', cantidad: 20 },
            { nombre: 'Lechuga', cantidad: 30 }
        ],
        nuevaFruta: '',
    },
    methods: {
        agregarFruta: function () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevaFruta = '';
        },
    }
})