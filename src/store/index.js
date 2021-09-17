import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartInfo:[
      {
        id: 8,
        img: "https://m.media-amazon.com/images/I/71AwWtT5AUL._SL1500_.jpg",
        name: "realme narzo 30 (Racing Blue, 6GB RAM, 128GB Storage)",
        price: "15,499.00",
        mrp: "16,999.00",
        condition: "New",
        storeCount: 1,
        offer: "1,500.00 (9%)",
      },
    {
      id: 7,

      img:
        "https://m.media-amazon.com/images/I/71hEzQGO5qL._AC_UL480_QL65_.jpg",
      name: "boAt Airdopes 121v2 Truly Wireless Bluetooth (Active Black)",
      price: "11,499.00 ",
      mrp: "13,999.00",
      condition: "New",
      storeCount: 1,
      offer: "2,500.00 (18%)",
    }
    
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
