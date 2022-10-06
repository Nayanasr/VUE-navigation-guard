<template>
  <div class="container">
    <div id="app">
      <Form @submit="onSubmit">
        <h4 class="mb-2" style="color: aquamarine">SignUp Form</h4>
        <div>
          <Field
            name="name"
            type="text"
            :rules="validateName"
            v-model="name"
            class="mb-3"
            placeholder="enter name"
          />
        </div>
        <div>
          <ErrorMessage name="name" class="errmsg" />
        </div>
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
            :rules="validatePassword"
            v-model="passwordData"
            class="mb-3"
            placeholder="enter password"
          />
        </div>
        <div>
          <ErrorMessage name="password" class="errmsg" />
        </div>
        <div>
          <Field
            name="confirmPassword"
            type="text"
            :rules="validateConfirmPassword"
            v-model="confirmPassData"
            class="mb-3"
            placeholder="confirm Password"
          />
        </div>
        <div>
          <ErrorMessage name="confirmPassword" class="errmsg" />
        </div>
        <button>Sign up</button>

        <p>
          Already have an account?
          <router-link to="/login" @click="goToLogin">Login here</router-link>
        </p>
      </Form>
    </div>
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
      name: "",
      email: "",
      passwordData: "",
      confirmPassData: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit value", values);
    },
    validateName(value) {
      // if the field is empty
      if (!value) {
        return "name field is required";
      }
      // if the field is not a valid name
      const regex = /[a-zA-Z]{2,}/;
      if (!regex.test(value)) {
        return "This field must be a valid name";
      }
      // All is good
      return true;
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
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
    validateConfirmPassword() {
      if (this.passwordData === this.confirmPassData) {
        return true;
      } else {
        return "*Password doesnot match";
      }
    },
    goToLogin() {
      this.$router.push("/login");
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
  /* background-image: url(https://as1.ftcdn.net/v2/jpg/02/43/57/08/1000_F_243570803_tf2Vr7HClVe9IgAN936dPeTQZ7MVT0YC.jpg); */
}
</style>