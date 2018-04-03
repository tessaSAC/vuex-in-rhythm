<template>
  <div class="TheScrollyContainer">
    <TheTargetDiv ref="theTarget" />
    <TheCompanionDiv />
    <button @click="scrollTo">scrollTo!</button>
  </div>
</template>

<script>
import TheTargetDiv from './TheTargetDiv'
import TheCompanionDiv from './TheCompanionDiv'

export default {
  components: {
    TheTargetDiv,
    TheCompanionDiv,
  },
}
</script>

<style lang="scss" scoped>
.TheScrollyContainer {
  background: AliceBlue;
  height: 50vh;
  width: 50vw;
  position: relative;
  overflow: scroll;
}
</style>
