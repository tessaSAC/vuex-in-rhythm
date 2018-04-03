<template>
  <div id="app">
    <TheScrollyContainer ref="TheScrollyContainer" />
    <TheCoordinatesDisplay :TheScrollyContainer="TheScrollyContainer" />
  </div>
</template>

<script>
import store from './store'
import TheScrollyContainer from './TheScrollyContainer'
import TheCoordinatesDisplay from './TheCoordinatesDisplay'

export default {

  name: 'app',
  components: {
    TheScrollyContainer,
    TheCoordinatesDisplay,
  },
  data() {
    return {
    }
  },
  computed: {
    TheScrollyContainer() {
      return this.$refs.TheScrollyContainer
    }
  },
  store,
}
</script>

<style>
.TheScrollyContainer, .TheCoordinatesDisplay {
  display: inline-block;
}
</style>
