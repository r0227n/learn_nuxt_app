<template>
    <div>
        <button @click="addToList">Add Todo</button>
    </div>
</template>

<script setup lang="ts">
const { todoList, addTodo } = useTodo()

function addToList() {
    addTodo({
        id: todoList.value.length + 1,
        text: 'New Todo',
    })
    console.log('added todoList', todoList.value)
}

</script>

<style lang="scss" scoped></style>