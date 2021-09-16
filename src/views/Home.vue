<template>
  <div class="ma-8 ml-10">
    <v-row justify="space-between">
      <v-card elevation="5" width="200">
        <v-card-text>Filters</v-card-text>
        <v-card-text>CATEGORIES</v-card-text>

        <v-checkbox
          v-model="EarphoneHeadphone"
          label="Earphone or Headphone"
        ></v-checkbox>

        <v-checkbox v-model="Speaker" label="Speaker"></v-checkbox>

        <v-checkbox v-model="BoysClothing" label="BoysClothing"></v-checkbox>

        <v-checkbox v-model="DigitalWatch" label="DigitalWatch"></v-checkbox>

        <v-checkbox v-model="Television" label="Television"></v-checkbox>

        <v-checkbox v-model="Microwave" label="Microwave"></v-checkbox>

        <v-checkbox v-model="Refrigerator" label="Refrigerator"></v-checkbox>

        <v-checkbox v-model="Camcorder" label="Camcorder"></v-checkbox>

        <v-checkbox
          v-model="ElectricShawer"
          label="ElectricShawer"
        ></v-checkbox>

        <v-checkbox
          v-model="NetworkingProducts"
          label="NetworkingProducts"
        ></v-checkbox>

        <v-card-text>PRICE in ₹</v-card-text>
        <v-slider hint="" max="50" min="-50"></v-slider>
        <v-card-text>CONDITION</v-card-text>

        <v-checkbox v-model="New" label="New"></v-checkbox>
        <v-checkbox v-model="LikeNew" label="Like New"></v-checkbox>
        <v-checkbox v-model="OpenBox" label="Open Box"></v-checkbox>
      </v-card>

      <v-card width="1200">
        <v-card-text>
          <v-tabs fixed-tabs color="indigo">
            <v-tab>
              Sort by
            </v-tab>
            <v-tab>
              Newest First
            </v-tab>
            <v-tab>
              Price-Low to High
            </v-tab>
            <v-tab>
              Price-High to Low
            </v-tab>
            <v-tab>
              Discount
            </v-tab>
          </v-tabs>

          <v-row class="product">
            <div v-for="product in products" :key="product.name">
              {{ products.name }}
              <v-img height="400px" width="300px" :src="product.image" />
              <div>{{ product.cost }}</div>
              <button>Add to cart</button>
            </div>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => {
    return {
      cart: [],
      products: [
        {
          name: "Realme $ (Crystal Blue, 128 GB)",
          cost: "₹ 12,999",
          image: "https://m.media-amazon.com/images/I/51z4GjHGZjL._SX679_.jpg",
        },
        {
          name: "Realme $ (Crystal Blue, 128 GB)",
          cost: "₹ 12,999",
          image:
            "https://cdn.shopify.com/s/files/1/0997/6284/products/Space-Blue_480x.png?v=1627585658",
        },
        {
          name: "Realme $ (Crystal Blue, 128 GB)",
          cost: "₹ 12,999",
          image: "https://images.indianexpress.com/2021/05/Asus-AIO-1.jpg",
        },
        {
          name: "Realme $ (Crystal Blue, 128 GB)",
          cost: "₹ 12,999",
          image: "https://m.media-amazon.com/images/I/51z4GjHGZjL._SX679_.jpg",
        },
        {
          name: "Realme $ (Crystal Blue, 128 GB)",
          cost: "₹ 12,999",
          image:
            "https://cdn.shopify.com/s/files/1/0997/6284/products/Space-Blue_480x.png?v=1627585658",
        },
        {
          name: "Realme $ (Crystal Blue, 128 GB)",
          cost: "₹ 14,999",
          image: "https://images.indianexpress.com/2021/05/Asus-AIO-1.jpg",
        },
      ],
      EarphoneHeadphone: false,
      Speaker: false,
      BoysClothing: false,
      DigitalWatch: false,
      Television: false,
      Microwave: false,
      Refrigerator: false,
      Camcorder: false,
      ElectricShaver: false,
      NetworkingProducts: false,
      New: false,
      LikeNew: false,
      OpenBox: false,
    };
  },
  components: {},
};
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
