import {reactive,onMounted} from 'vue'
import axios from 'axios'

export default function(){
    // 数据
  let dogList = reactive([
    'https://images.dog.ceo/breeds/pyrenees/n02111500_2746.jpg'
  ])

  // 方法
  async function getDog(){
    try {
      // 发请求
      let {data} = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      // 维护数据
      dogList.push(data.message)
    } catch (error) {
      // 处理错误
      console.error('获取狗狗图片失败:', error)
    }
  }
    
  //挂载钩子
  onMounted(()=>{
    getDog()
  })
    
  //向外部暴露数据
  return {dogList,getDog}
}