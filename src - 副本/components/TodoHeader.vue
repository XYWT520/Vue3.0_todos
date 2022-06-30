<script setup>
import { ref } from 'vue';

const emit = defineEmits(['hAdd'])

const taskName = ref('')

const hAdd = () => {
  if(taskName.value.length === 0) return
  emit('hAdd',taskName.value)
  taskName.value = ''
}

</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input v-model.trim="taskName" @keydown.enter="hAdd" class="new-todo" placeholder="把老婆添加进后宫" autofocus />
  </header>
</template>

<style lang="less" scoped></style>
