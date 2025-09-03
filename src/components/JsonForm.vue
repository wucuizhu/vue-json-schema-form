<template>
    <el-form :model="formData" ref="formRef">
      <template v-for="field in schema.fields">
        <el-form-item
          v-if="field.type === 'input'"
          :label="field.label"
          :prop="field.prop"
          :key="field.prop"
        >
          <el-input v-model="formData[field.prop]" />
        </el-form-item>
  
        <el-form-item
          v-if="field.type === 'select'"
          :label="field.label"
          :prop="field.prop"
          :key="field.prop"
        >
          <el-select v-model="formData[field.prop]">
            <el-option
              v-for="option in field.options"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            />
          </el-select>
        </el-form-item>
      </template>
    </el-form>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  import { ElForm, ElFormItem, ElInput, ElSelect, ElOption } from 'element-plus'
  
  const props = defineProps({
    schema: { type: Object, required: true }
  })
  
  const formData = reactive({})
  const formRef = ref(null)
  
  props.schema.fields.forEach(f => {
    formData[f.prop] = f.default || ''
  })
  </script>
  