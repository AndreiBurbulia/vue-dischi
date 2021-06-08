const app = new Vue({
    el: "#app",
    data: {
        dischi: "",
        valoreSelect: "all",
        error: null,
    },
    methods: {

    },

    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then(response => {
                this.dischi = response.data.response;
                this.dischi = this.dischi.sort((a, b) => b.year - a.year);
            })
            .catch(e => {
                console.error(e);
                this.error = " Sorry could not connect to the API" + e
            });



    },

    computed: {
        filteredList() {
            if (this.valoreSelect === "all") {
                return this.dischi
            } else {
                return this.dischi.filter(disco => {
                    return disco.genre.toLowerCase() === this.valoreSelect
                })
            }
        },

    }

})
/*
Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music
avremo a disposizione una decina di dischi musicali.
Utilizzando vue, stampiamo a schermo una card per ogni album.


BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
BONUS 2: Ordinare i dischi per anno di uscita.

*/