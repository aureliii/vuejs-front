<template>
<div className="container">
      <header className="jumbotron">
        <h3>
          <strong>Account confirmed!</strong>
        </h3>
      </header>
      <router-link to="/login" class="card-link">Procedi con il Log In</router-link>
      <button v-on:click="confirmUser">Confirm</button>
      <div>User {{ $route.params.confirmationCode }}</div>
</div>
    
  
</template>

<script>
import { mapActions } from "vuex";
export default {
    
    methods: {
    ...mapActions(["confirm"]),
    confirmUser() {
        console.log('confirmationCode nel page '+this.$route.params.confirmationCode);
      let data = {confirmationCode : this.$route.params.confirmationCode};
      this.confirm(data).then(res => {
          console.log('data res '+res.data.success);
        if (res.data.success) {
          this.$router.push("login");
        }
      })
      .catch(err => {
          console.log(err);
      });
    }
  }

}
</script>

<style>

</style>