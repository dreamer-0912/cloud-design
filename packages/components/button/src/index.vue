<template>
    <button :disabled="disabled" :class="[ns.b(), ns.m(type), ns.is('round', round), ns.is('disabled', disabled)]">
        <span>这是一个button组件这是一个button组件</span>
    </button>
</template>

<script setup>
import { useNamespace } from '@cloud-design/hooks'
defineOptions({
    name: 'CloudButton'
})

defineProps({
    type: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        default: 'default'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    round: {
        type: Boolean,
        default: false
    }
})

const ns = useNamespace('button')
console.log(ns.b(), 'useNamespace');

</script>

<style></style>