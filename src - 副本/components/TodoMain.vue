<script setup>
import { computed } from 'vue';


// 如果在模板中使用数据,可以不需要定义返回值
const props = defineProps({
  list: { type: Array, required: true }
})

const emit = defineEmits(['changeDone', 'hDel', 'changeAll'])

const hChange = (id) => {
  // console.log('我要改变父组件了');
  emit('changeDone', id)
}

const changeAll = computed({
    get() {
      return props.list.every(item => item.done)
    },
    set(val) {
      emit('changeAll',val)
    }
  }
)

</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="changeAll" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{ completed: item.done }" v-for="item in list " :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done" @change="hChange(item.id)" />
          <label>{{ item.name }}</label>
          <button class="destroy" @click="emit('hDel', item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped>
</style>
