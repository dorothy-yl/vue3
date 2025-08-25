import { defineStore } from "pinia"

export const useCountStore = defineStore('count', {
    // 真正存储数据的地方
    state: () => ({
        sum: 99
    }),
    actions: {
        increment() {
            this.sum++
        }
    }
})