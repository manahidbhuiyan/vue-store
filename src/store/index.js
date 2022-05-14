

export const storage = {
    state:{
        inventory: [],
        cart: [],
    },
    getters:{
        getInventory(state){
            return state.inventory
        },
        getCart(state){
            return state.cart
        },
    },
    mutations:{
        addToCart(state, payload){
            return state.cart.push(payload)
        },
        removeItem(state, payload){
            return state.cart.splice(payload , 1)
        }
    },
    // action:{
    //
    // },
}