const {createApp} = Vue;




createApp({

  data(){
    return{
      images: [
        'img/01.webp',
        'img/02.webp',
        'img/03.webp',
        'img/04.webp',
        'img/05.webp'
      ],
      
      counter: 0
    }
  },

  methods:{
    nextPrev(isNext){
      if(isNext)this.counter++;
      else this.counter--;

      if(this.counter === 5) this.counter = 0;
      if(this.counter < 0) this.counter = 4

      //ho messo dei numeri fissi perchè il this.images.lenght non me lo prendeva e quando ho messo i numeri ha iniziato a funzionare
    }

  }

}).mount('#app')