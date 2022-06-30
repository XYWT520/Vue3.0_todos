<template>
    <div>
        数据:{{conut.num}}
        {{conut.adds}}
        <button @click="conut.add"> + 100</button>
    </div>
</template>

<script setup>
import useCountStore from './store/counter';

const conut = useCountStore()
</script>

<style lang="scss" scoped>
</style>