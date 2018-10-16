<template>
  <ul class="nav nav-pills nav-fill">
    <!-- <li class="nav-item nav-link"><router-link to="/">Home</router-link></li>
    <li class="nav-item nav-link"><router-link to="/user">User</router-link></li> -->

    <!-- Why doesn't the Home routes active class get removed? Always "/"-->
    <router-link to="/" tag="li" active-class="active"><a>Home</a></router-link>
    <router-link to="/portfolio" tag="li" active-class="active" exact><a>Portfolio</a></router-link>
    <router-link to="/stocks" tag="li" active-class="active" exact><a>Stocks</a></router-link>

    <li><button class="btn btn-info">End Day</button></li>
    <router-link to="/load" tag="li" active-class="active" exact><a>Load</a></router-link>
    <li class="btn btn-primary" @click="saveData">Save</li>
    <totalAmt></totalAmt>
  </ul>
</template>

<script>
import { mapActions } from "vuex";
import totalAmt from './user/totalAmt.vue'

export default {
  components: {
        'totalAmt': totalAmt
    },
  methods: {
    ...mapActions({
            saveData: "saveData",
        }),
  },
    
}
</script>