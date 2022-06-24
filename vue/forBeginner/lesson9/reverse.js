const { createApp } = Vue

createApp({
    data(){
        return{
            greet: "Hello NinjaCode!"
        }
    },
    methods: {
        reverseText: function() {
          this.greet = this.greet.split('').reverse().join(' ')
        }    
    }
  }).mount('#app')