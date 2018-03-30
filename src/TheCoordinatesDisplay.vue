<template>
  <div class="TheCoordinatesDisplay">
    <p v-for="(coord, idx) in GET_LOCATION" :key="idx">
      {{ coord }}
    </p>

    <button @click="changeTargetLocation">move target!</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { GET_LOCATION } from './storeModules/location'
import { DISPATCH_LOCATION } from './storeModules/location'

export default {
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
  },
  computed: mapGetters({
    [GET_LOCATION]: `location/${GET_LOCATION}`
  })
}
</script>
