<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <div> This is the about page {{ route.params.name }}</div>
</template>

<style lang="less" scoped></style>