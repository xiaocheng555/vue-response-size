<template>
  <div>
    {{ $vSize.isXs }}
  </div>
</template>

<script setup lang="ts">
import { $vSize } from '../../src/vue-response-size'

console.log($vSize, '$vSize')
</script>

<style lang='less' scoped>
</style>