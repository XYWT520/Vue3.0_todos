<script setup>
import { ref } from 'vue';
import useStore from '../store'
import { watch } from 'vue'

const { todos } = useStore()

const taskName = ref('')
const addTaskName = () => {
  if(taskName.value.length === 0 ) return
  todos.add(taskName.value)
  taskName.value = ''
}


// 侦听器
watch(todos.list, () => {
  // console.log("我要监听了");
  localStorage.setItem('todos',JSON.stringify(todos.list))
})
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input @keydown.enter="addTaskName" v-model="taskName" class="new-todo" placeholder="What needs to be done?" autofocus />
  </header>
</template>

<style lang="less" scoped></style>
