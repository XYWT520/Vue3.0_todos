<script setup>
import { computed } from 'vue'
const  list  = defineProps({
  list:{type:Array,required:true}
})

const count = computed(() => list.list.filter(item => !item.done).length)
</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{count}}</strong>剩余任务</span>
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed">Clear completed</button>
  </footer>
</template>

<style lang="less" scoped></style>
