import { createApp, h } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import JsonForm from '../src/index.js'

const schema = {
  fields: [
    { type: 'input', label: '姓名', prop: 'name', default: '张三' },
    { type: 'select', label: '性别', prop: 'gender', options: [{ label: '男', value: 'M' }, { label: '女', value: 'F' }] }
  ]
}

createApp({
  render() {
    return h(JsonForm, { schema })
  }
}).use(ElementPlus).mount('#app')
