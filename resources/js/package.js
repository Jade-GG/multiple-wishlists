Vue.component('wishlist', () => import('./Wishlist.vue'))

document.addEventListener('turbo:load', (event) => {
    window.app.$on('logout', () => {
        localStorage.removeItem('wishlists')
    });
})

Vue.mixin({
    data() {
        return {
            wishlistsLoading: false
        }
    },
})
