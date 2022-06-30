<script setup>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'

import { ref,watch } from 'vue'
// ref 和 reactive 的区别
// 作用: 都可以为数据提供响应式的功能
// 区别: ref 可以为基本数据类型, 而 reactive 只能给引用数据类型提供
// 原理: reactive 是对对象进行代理的, 而 ref 是在数据外面包裹了一层对象, 其中 .value 属性是原本的数据

// 提供数据
const list = ref(JSON.parse(localStorage.getItem('todoList') || '[]'))

const chageDone = (id) => {
  // console.log(id);
  const res = list.value.find(item => item.id === id)
  res.done = !res.done
}

const hDel = (id) => {
  list.value = list.value.filter(item => item.id !== id)
}

const add = (taskName) => {
  // console.log(taskName);
  list.value.push({
    id: Date.now(),
    name: taskName,
    done: false
  })
}
const hChangeAll = val => {
  list.value.forEach(item => item.done = val)
}

// 参数1: 要监听的数据
// 参数2: 回调函数
// 参数3: 配置对象
// 不加 value 可以监听到数据的数量变化, 但无法侦听到内部属性的变化
// 总结: 如果时引用数据类型的侦听, 不需要写 value , 但是需要写 deep
// 原理: 其实就是监视的 ref 得到的响应式对象, 加 deep 可以侦听到 .value 属性的变化, 而 value 就是我们的数组
watch(list, () => {
  localStorage.setItem('todoList', JSON.stringify(list.value))
}, { deep: true })

</script>

<template>
  <section class="todoapp">
    <TodoHeader @hAdd="add"></TodoHeader>
    <TodoMain :list="list" @changeDone="chageDone" @hDel="hDel" @changeAll="hChangeAll"></TodoMain>
    <TodoFooter :list="list"></TodoFooter>
  </section>
</template>

<style>
</style>
