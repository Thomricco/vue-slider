new Vue({
    el: "#app",
    data: {
        currentIndex: 0,
        immagini: [
            {
                immagine: 'https://unsplash.it/300/300?image=300'
            },
            {
                immagine: 'https://unsplash.it/300/300?image=301'
            },
            {
                immagine: 'https://unsplash.it/300/300?image=302'
            },
            {
                immagine: 'https://unsplash.it/300/300?image=306'
            },
            {
                immagine: 'https://unsplash.it/300/300?image=304'
            },
            {
                immagine: 'https://unsplash.it/300/300?image=305'
            },
            
        ]
    },
    methods: {
        nextFreddura: function () {
            this.currentIndex++;
            // -> e se arrivo alla fine dell'array?
        },
        prevFreddura: function () {
            this.currentIndex--;
            // -> e se arrivo a 0?
        }
    }
})