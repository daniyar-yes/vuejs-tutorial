var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: "./assets/vmSocks-green.jpg",
        inStock: true,
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
                variantImage: "./assets/vmSocks-green.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue.jpg"
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
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})