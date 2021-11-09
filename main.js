var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        inventory: 100,
        altText: "A pair of socks",
        description: 'made of natural wool',
        link: "https://github.com/daniyar-yes",
        onSale: false,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green.jpg",
                variantQuantity: 9
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue.jpg",
                variantQuantity: 0
            }
        ],
        cart: 0,
        sizes: ["XS", "S", "M", "L", "XL"],
        showSize: false,
        showDetails: false,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart -= 1
        },
        emptyCart() {
            this.cart = 0
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        isOnSale() {
            return this.brand + ' ' + this.product + ' is on Sale!'
        }
    }
})