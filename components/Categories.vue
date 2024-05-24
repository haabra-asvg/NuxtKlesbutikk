<script setup lang="ts">
import { defineProps } from 'vue';

const { id, name } = defineProps<{
  id: number;
  name: string;
}>();
</script>

<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ name }}</td>
    <td class="btnTD">
      <NuxtLink :to="`/admin/category/${id}`" class="btnRediger">Rediger</NuxtLink>
      <button class="btnSlett">Slett</button>
    </td>
  </tr>
</template>

<style scoped lang="scss">
  @import url('../assets/css/table.scss')
</style>