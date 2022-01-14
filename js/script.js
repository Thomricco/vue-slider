new Vue({
    el: "#app",
    data: {
        colore: [
            {
                color: 'black'
            },
            {
                color: 'white'
            },

        ],
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
        nextImg: function () {
            this.currentIndex++;
            // -> e se arrivo alla fine dell'array?
        },
        prevImg: function () {
            this.currentIndex--;
            // -> e se arrivo a 0?
        },
        //coloreCerchio: function() {
          //  this.color;
        //}

    }
})