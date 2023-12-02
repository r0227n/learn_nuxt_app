<template>
    <h1> Hello World </h1>
    <BaseTitle>
        <h2> Hello World </h2>
        <h3> Hello World </h3>
        <h4> Hello World </h4>
    </BaseTitle>
    <ChildTtile>
        <h2> Hello World </h2>
        <h3> Hello World </h3>
        <h4> Hello World </h4>
    </ChildTtile>
    <Todo />
    <Book />
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'My Amazing Site',
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

definePageMeta({
    middleware: [
        function (to, from) {
            // Custom inline middleware
            console.log('middleware')
        },
        'current',
    ],
});
</script>

