<template>
  <div id="app">
    <TheScrollyContainer />
    <TheCoordinatesDisplay />
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
  data () {
    return {
    }
  },
  store
}
</script>

<style>
.TheScrollyContainer, .TheCoordinatesDisplay {
  display: inline-block;
}
</style>
