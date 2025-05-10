<script setup>
import { reactive, watch } from 'vue';

const state = reactive({
  count: 0
});

// ใช้ watch เพื่อติดตามการเปลี่ยนแปลงของ count
watch(
  () => state.count,
  (newCount, oldCount) => {
    console.log(`count เปลี่ยนจาก ${oldCount} เป็น ${newCount}`);
  }
);
</script>

<template>
  <div>
    <p>hiiiiiiiiii</p>
    <p>จำนวน: {{ state.count }}</p>
    <button @click="state.count++">เพิ่มจำนวน</button>
  </div>
</template>
