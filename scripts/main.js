const app = Vue.createApp({
  data() {
    return {
      premium: false,
      cart: 0,
    }
  },

  methods: {
    updateCart() {
      console.log('update cart');
      this.cart++;
    },
  }
});
