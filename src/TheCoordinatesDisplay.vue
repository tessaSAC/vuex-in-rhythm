<template>
  <div class="TheCoordinatesDisplay">
    <p v-for="(coord, idx) in GET_LOCATION" :key="idx">
      {{ coord }}
    </p>

    <button @click="scrollTo">scrollTo!</button>
    <button @click="scrollTop">scrollTop!</button>
    <button @click="changeTargetLocation">move target!</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { GET_LOCATION } from './storeModules/location'
import { DISPATCH_LOCATION } from './storeModules/location'

export default {
  props: {
    TheScrollyContainer: {
      required: true,
    }
  },
  computed: mapGetters({
    [GET_LOCATION]: `location/${GET_LOCATION}`
  }),
  methods: {
    ...mapActions({
      [DISPATCH_LOCATION]: `location/${DISPATCH_LOCATION}`
    }),
    changeTargetLocation() {
      this[DISPATCH_LOCATION]([`${this.generateRandomNumber()}vh`, `${this.generateRandomNumber()}vw`])
    },
    generateRandomNumber() {
      return Math.floor(Math.random() * 100) + 1
    },
    scrollTo() {
      const [y, x] = this[GET_LOCATION]
      this.TheScrollyContainer.scrollTo(x, y)  // TheScrollyContainer doesn't exist
    },
    scrollTop() {
      // this.$refs.theTarget.scrollTop() = 0
    },
  },
}
</script>
