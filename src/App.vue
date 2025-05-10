<template>
  <div>
    <h1>hiii</h1>
    
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/Login">Login</RouterLink>
    </nav>

    <!-- หน้านี้จะแสดงเนื้อหาของแต่ละ route -->
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>