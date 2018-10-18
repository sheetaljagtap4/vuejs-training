<template>
  <ul class="nav nav-pills nav-fill">
    <router-link to="/" tag="li" active-class="active"><a>Home</a></router-link>
    <router-link to="/portfolio" tag="li"><a>Portfolio</a></router-link>
    <router-link to="/stocks" tag="li" ><a>stocks</a></router-link>
    <li><button class="btn btn-info" @click="endDay()">End Day</button></li>
    <li class="btn btn-danger" @click="saveData">Save</li>
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
      endDay: "endDay"
    }),
  },
}
</script>
