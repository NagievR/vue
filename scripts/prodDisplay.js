app.component('product-display', {
  template:
  `
  <div class='product-display'>
    <h2>{{title}}</h2>
    <div>{{ product.date }}</div>

    <p 
      v-if='product.inStock'
      :class='[product.inStock ? "active" : ""]'>in stock
    </p>
    <p v-else>
      sold out
    </p>

    <product-details :details='details'></product-details>

    <ul 
      v-for='(variant, index) of product.variants'
      @mouseover='updateImage(variant.src)'
      :style="{ backgroundColor: variant.name }"
      >
      {{ variant.name }}
    </ul>

    <p>Shipping: {{shipping > 0 ? shipping + '$' : shipping}}</p>

    <button 
      @click='addToCart()'
      :disabled='!product.inStock'>
      Add to cart
    </button>

    <img style="height: 400px;" v-bind:src="product.imageSrc" alt="image">
  </div>
  `,
  
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      product: {
        brand: 'Noski',
        name:'Socks SB',
        date:'29.92/2019',
        imageSrc: './assets/socks1.jpg',
        inStock: true,
      },
      styles: {
        backgroundColor: 'gray',
        width: '100px',
        cursor: 'pointer',
        border: '1px sodlid red'
      },
      variants: [
        { name: 'blue', src: 'https://dodosocks.com/wp-content/uploads/2017/03/kunsht_01-2-800x800.jpg' }, 
        { name: 'green', src: './assets/socks1.jpg'}
      ],
      details: ['50% cotton', '10% carton', '40% air'],
    }
  },

  computed: {
    title() {
      return `${this.product.name} ${this.product.brand} on sale`; 
    },
    shipping() {
      if (this.premium) {
        return 'free';
      } else {
        return 2;
      }
    }
  },

  methods: {
    updateImage(src) {
      this.product.imageSrc = src;
    },

    addToCart() {
      this.$emit('add-to-card');
      console.log('event has triggered');
      console.log(this.$);
      console.log('*******************');
    }
  }

});
