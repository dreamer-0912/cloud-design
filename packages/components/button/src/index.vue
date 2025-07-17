<template>
    <div>这是一个button组件1122</div>
</template>

<script setup>
import { useNamespace } from '@cloud-design/hooks'
defineOptions({
    name: 'CloudButton'
})

const ns = useNamespace()
console.log(ns.namespace, 'useNamespace');

</script>

<style></style>