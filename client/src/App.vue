<template>
  <div id="app">
    <div v-if="!isLoggedIn">
      <Navbar/>
      <router-view/>
    </div>
    <div v-else-if="isLoggedIn">
       <div class="container">
          <router-view/>
         </div>
    </div>
    <br>
    <br>

    <div class="container">
      <Errors v-if="error" :msg="error"/>
     
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/Navbar";
import Errors from "@/components/Errors";


export default {
  
  components: {
    Navbar,
    Errors
  },
  computed: {
    ...mapGetters(["error"]),
    ...mapGetters(["isLoggedIn"])
  }
};
</script>
<style>
.card {
  border-radius: 0px;
}
.btn {
  border-radius: 0px;
}
</style>
