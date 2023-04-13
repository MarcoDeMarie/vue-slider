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

      if(this.counter === this.images.length) this.counter = 0;
      if(this.counter < 0) this.counter = this.images.length - 1;

    }

  }

}).mount('#app')