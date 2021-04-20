// console.log(Vue);

// const app = Vue.createApp({
//   data() {
//     return {
//       product: 'Socks',
//     }
//   }
// });


const app = {
  data() {
    return {
      
      product: {
        name:'Socks SB',
        date:'29.92/2019',
        foo() {
          setTimeout(() => {
            this.name = 'Socks UA';
          }, 2000)
        },
      }
      
    }
  }
}

Vue.createApp(app).mount('#app');
