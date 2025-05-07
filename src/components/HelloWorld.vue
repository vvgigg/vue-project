<script setup>
import { ref } from 'vue'

const count = ref(0) // สร้างตัวแปร count ด้วย ref และค่าเริ่มต้นเป็น 0
</script>

<template>
  <div>
    <p>จำนวน: {{ count }}</p>
    <button @click="count++">add</button> <!-- กดปุ่มเพิ่มค่า -->
  </div>
</template>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>