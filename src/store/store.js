import {createStore} from 'vuex'


let store= createStore({
    state() {
        return{
          userData:[],

          isAuthenticated: false
            
        }

    },
   mutations:{
    fetchData(state,payload) {
      state.userData=payload

    },

    login(state){
      state.isAuthenticated = true
    },
    logout(state){
      state.isAuthenticated = false
    }
   },
    
        actions: {
          async fetchData(context) {
            try {
              let res = await fetch("https://ty-shop.herokuapp.com/api/products");
              let data = await res.json();
              console.log("data", data.products);
              context.commit("fetchData",data.products)// send it to mutations


            } catch (err) {
              console.log("error", err);
            }
          },
        },
       
    })
    export default store;