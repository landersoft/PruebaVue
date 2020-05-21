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
        total: 0
    },
    methods: {
        agregarFruta: function () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevaFruta = '';
        },
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for (fruta of this.frutas) {
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }

})