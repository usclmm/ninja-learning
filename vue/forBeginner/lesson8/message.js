const { createApp } = Vue

createApp({
  methods: {
      alertText: function(){
        alert("I'm ninja!");
      }
  }
}).mount('#app')