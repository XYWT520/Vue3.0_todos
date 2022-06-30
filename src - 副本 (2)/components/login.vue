<template>
    <div>
        <hr>
        登录页<br>
        {{ store.state.name }}
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()

</script>

<style lang="scss" scoped>
</style>