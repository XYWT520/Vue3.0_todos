import useTodoStore from './todo'


export default function useStore () {
    return {
        todos:useTodoStore()
    }
}

// const todos = useTodoStore()

// export const useStore = function (){
//     return todos
// }