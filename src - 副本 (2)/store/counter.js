import { defineStore } from "pinia";
// 创建 store 命名规则, useXXX
// 参数1: store 的唯一表示
// 参数2: 对象, 可以提供 state, actions, getters

const useCountStore = defineStore('counter',{
    state:() => {
        return {
            num:100
        }
    },
    actions:{
        add(){
            this.num += 100
        }
    },
    getters:{
        adds(){
            return this.num * 2
        }
    }
})

// 默认导出
export default useCountStore