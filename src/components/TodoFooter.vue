<script setup>
import useStore from '../store';
const { todos } = useStore()
</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ todos.clearCompleted }}</strong>未完成</span>
    <ul class="filters" >
      <li v-for="item in todos.filters" :key="item">
        <a @click="todos.changeActive(item)" :class="{ selected: item === todos.active }" href="javascript:;">{{item}}</a>
      </li>
    </ul>
    <button class="clear-completed" @click="todos.completed">清楚未完成</button>
  </footer>
</template>

<style lang="less" scoped>
</style>
