// 导入 pinia
import { defineStore } from 'pinia'

const useTodoStore = defineStore('todos', {
  state: () => {
    return {
      list: JSON.parse(localStorage.getItem('todos') || '[]'),
      filters: ['All', 'Active', 'Completed'],
      active: 'All',
    }
  },

  actions: {
    // 添加数据
    add(taskName) {
      this.list.push({
        id: Date.now(),
        name: taskName,
        done: false
      })

    },

    // 删除数据
    hDel(id) {
      this.list = this.list.filter(item => item.id !== id)
    },

    // 全选
    isChecked(done) {
      // this.list.forEach(item => item.done = e.target.ckecked)
      this.list.forEach(item => item.done = done)
    },

    changeDone(id) {
      const todo = this.list.find(item => item.id === id)
      todo.done = !todo.done
    },

    changeActive(active) {
      this.active = active
    },

    // 清楚未完成
    completed() {
      this.list = this.list.filter(item => item.done === true)
    }
  },

  // 计算属性要 return 计算属性要 return 计算属性要 return 计算属性要 rturn
  getters: {
    // 未完成
    clearCompleted() {
      return this.list.filter(item => !item.done).length
    },

    // 反选
    isAll() {
      return this.list.every(item => item.done)
    },

    showList() {
      if (this.active === 'Active') {
        return this.list.filter(item => item.done)
      } else if (this.active === 'Completed') {
        return this.list.filter(item => !item.done)
      } else {
        return this.list
      }
    }

  },
})

export default useTodoStore