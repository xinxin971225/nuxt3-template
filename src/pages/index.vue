<template>
  <div>
    <h1 class="border-red-500 border text-3xl font-bold underline">
      欢迎来到ziyu的第一个页面
    </h1>
    <el-button @click="ElMessage('hello')">button</el-button>
    <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
    <LazyElButton type="warning">lazy button</LazyElButton>
    <!-- <NuxtLink to="/list">进入列表页</NuxtLink> -->

    <br />
    <br />

    <!-- <NuxtLink to="/user-admin/111">进入管理员 id 为 111 的用户中心</NuxtLink> -->
  </div>
</template>

<script setup>
// const foo = useFoo()
// console.log(foo.value)
</script>
