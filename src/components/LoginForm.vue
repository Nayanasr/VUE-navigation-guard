<template>
  <div id="app" class="container shadow">
    <Form @submit="handleSubmit">
      <h4 class="mb-2" style="color: green">Login Form</h4>
      <div>
        <Field
          name="email"
          type="email"
          :rules="validateEmail"
          v-model="email"
          class="mb-3"
          placeholder="enter email"
        />
      </div>
      <div>
        <ErrorMessage name="email" class="errmsg" />
      </div>
      <div>
        <Field
          name="password"
          type="text"
          v-model="password"
          :rules="validatePassword"
          class="mb-3"
          placeholder="enter password"
        />
      </div>
      <div>
        <ErrorMessage name="password" class="errmsg" />
      </div>
      <button class="mb-2" >submit</button>
      <p>
        Don't have an account?
        <router-link to="/signup" @click="goToSignup">Sign up here</router-link>
      </p>
    </Form>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPass: false,
    };
  },
  methods: {
    // onSubmit(values) {
    //   console.log("submit value", values);
    // },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "email field is required";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      // All is good
      return true;
    },
    //validate password
    validatePassword(value) {
      if (value) {
        let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (passRegex.test(value)) {
          return true;
        } else {
          return "*enter valid password";
        }
      } else {
        return "*password required";
      }
    },
    goToSignup() {
      this.$router.push("/signup");
    },
    // goToProducts() {
    //   if (this.email === "" || this.password === "") {
    //     this.confirmPass = true;
    //   } else {
    //     alert("You are now logged in");
    //     this.$router.push("/products");
    //   }
    // },
    handleSubmit() {
      this.$store.commit("login");
      alert("You are logged in");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.errmsg {
  color: red;
}
.container {
  border: 1px solid green;
  width: 100%;
  height: 460px;
  padding-top: 3%;
  /* background-image: url(https://media.istockphoto.com/photos/word-welcome-on-blue-background-picture-id1127167754?k=20&m=1127167754&s=612x612&w=0&h=2wiqquuBz-uCg-B6aBuvuyUfRvcbHGkcWGfggbeQGJ4=); */
}
</style>