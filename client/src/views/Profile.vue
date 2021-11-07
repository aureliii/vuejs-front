<template>
  <div>
    <h1><Menu/></h1>
    <h2>Profile</h2>
    

    <div class="card" v-if="user">
      <ul class="list-group">
        <li class="list-group-item">Email: {{ user.email }}</li>
        <li class="list-group-item">Username: {{ user.username }}</li>
        <li class="list-group-item">Name: {{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
//import bubble from '../components/bubble.vue';
import Menu from '../components/Menu';
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
        return {
          menus: {
        //    slide: { buttonText: 'Slide' },
        //    push: { buttonText: 'Push' },
         //   pushRotate: { buttonText: 'Push Rotate' },
        //    reveal: { buttonText: 'Reveal' },
         //   scaleDown: { buttonText: 'Scale Down' },
        //    scaleRotate: { buttonText: 'Scale Rotate' },
            // elastic: { buttonText: 'Elastic - (WIP)' },
            // stack: { buttonText: 'Stack - (WIP)' },
            bubble: { buttonText: 'Bubble' },
      //      fallDown: { buttonText: 'Fall Down' }
          },
          side: 'left',
          currentMenu: 'bubble'
        };
      },
  components: {
  //  bubble,
    Menu
  },
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions(["getProfile"]),
    changeMenu(menu) {
        this.currentMenu = menu.replace(/ +/g, '').toLowerCase();
        return this.currentMenu;
      }
  },
  created() {
    this.getProfile();
  },components: {
    Menu
  }
};

</script>

<style>
</style>
