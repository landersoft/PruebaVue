Vue.component('saludo', {
    template: `
    <div>
    <h1> {{ saludo }} </h1>
    <h3> Otra cosa </h3>
    </div>
    `,
    data() {
        return {
            saludo: 'Hola desde Vue componente'
        }
    }
});





const app = new Vue({
    el: "#app",
    data: {
        saludo: 'Hola desde Vue'

    }
})