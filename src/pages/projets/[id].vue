<script setup lang="ts">
import { OneProject } from '@/backend';
import projetPage from '@/components/projetPage.vue';

const props = defineProps<{
  id: string
}>();
const projet = await OneProject(props.id);
</script>

<template>
  <projetPage v-bind="{ ...projet}" />
</template>