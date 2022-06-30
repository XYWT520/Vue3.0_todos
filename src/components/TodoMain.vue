<script setup>
import useStore from '../store';

const { todos } = useStore()


</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" @change="todos.isChecked(!todos.isAll)"
      :checked="todos.isAll" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{ completed: item.done }" v-for="item in todos.showList" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done" @change="todos.changeDone(item.id)" />
          <label>{{ item.name }}</label>
          <button @click="todos.hDel(item.id)" class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped>
</style>
