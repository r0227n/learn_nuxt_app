<template>
    <div>
        <!-- <h1> {{ book?.items[0]?.volumeInfo?.title }} </h1> -->
        <!-- <p> {{ book?.items[0]?.volumeInfo?.description }} </p>
        <img :src="book?.items[0]?.volumeInfo?.imageLinks?.thumbnail" /> -->
        <pre>{{ data }}</pre>
    </div>
</template>

<script setup lang="ts">

// onMounted(() => {
//     console.log('mounted')
//     data()
// })

const { data } = await useFetch('/api/books')

</script>

<style lang="scss" scoped></style>