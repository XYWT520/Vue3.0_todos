<template>
    <div>
        <hr>
        主页<br>
        {{ store.state.age }}
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
</script>

<style lang="scss" scoped>
</style>