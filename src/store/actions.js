export default {
    saveUserName(context,username) {
        context.commit('SAVEUSERNAME',username)
    },
    saveCartCount(context,cartCount) {
        context.commit('SAVECARTCOUNT',cartCount)
    }
}