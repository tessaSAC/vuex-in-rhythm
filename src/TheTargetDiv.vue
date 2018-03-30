<template>
  <div class="TheTargetDiv" :style="location">
    <p>Find me!</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { GET_LOCATION } from './storeModules/location'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      [GET_LOCATION]: `location/${GET_LOCATION}`
    }),
    location() {
      return {
        top: this[GET_LOCATION] ? this[GET_LOCATION][0] : '50vh',
        left: this[GET_LOCATION] ? this[GET_LOCATION][1] : '80vw'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.TheTargetDiv {
  background: DeepPink;
  height: 10vh;
  width: 10vw;
  position: absolute;

  p {
    color: white;
    font-size: 1rem;
    position: relative;
    position: relative;
    float: left;
    top: calc(50% - 0.5rem);
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
