import { defineStore } from "pinia"

export const useCountStore = defineStore('count', {

    actions: {
        increment(value:number) {
            console.log('increment被调用了',value)
            // console.log(this.sum)
            if(this.sum <10){
                this.sum += value
            }
            
        }
    },

    // 真正存储数据的地方
    state() {
        return {
            sum: 5,
            school: 'atguigu',
            address: '宏福科技园'
        }

    }
})