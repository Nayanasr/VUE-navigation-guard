<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"> SHOPIFY </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item" v-if="!this.$store.state.isAuthenticated">
            <router-link class="nav-link active" aria-current="page" to="/login"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/cart"
              >Cart</router-link
            >
          </li>

          <li class="nav-item" v-if="this.$store.state.isAuthenticated">
            <button class="btn btn-success" @click="logout">LOG OUT</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout(){
      alert(" you are Logged out");
      this.$store.commit("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
