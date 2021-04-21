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
        imageSrc: './assets/socks1.jpg',
        inStock: true,
        details: ['50% cotton', '10% carton', '40% air'],
        variants: [
          { name: 'blue', src: 'https://dodosocks.com/wp-content/uploads/2017/03/kunsht_01-2-800x800.jpg' }, 
          { name: 'green', src: './assets/socks1.jpg'}
        ]
      },

      styles: {
        backgroundColor: 'gray',
        width: '100px',
        cursor: 'pointer',
        border: '1px sodlid red'
      },

      card: 0,
      
    }
  },

  methods: {
    addToCard() {
      this.card++;
    },

    updateImage(src) {
      console.log(src);
      this.product.imageSrc = src;
    }
  }
}

const mountedApp = Vue.createApp(app).mount('#app');

console.log(mountedApp);