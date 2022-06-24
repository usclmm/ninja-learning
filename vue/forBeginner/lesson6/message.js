const { createApp } = Vue

createApp({
  data() {
    return {
      hobbies: [
        { name: "Yoga" },
        { name: "Programming" },
        { name: "BaseBall" },
        { name: "Music" }
      ]
    }
  }
}).mount('#app')