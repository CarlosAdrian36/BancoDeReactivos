<template>
  <div class="flex flex-row">
    <div class="basis-10/12">
      <h1 class="text-4xl font-bold text">Administración de Bancos</h1>
    </div>
  </div>

  <p class="text-(--color-texto) mt-2 mb-4">
    Gestione sus bancosde de preguntas y carpetas de estudio de manera centralizada
  </p>

  <ListaTodos />
</template>
<script setup lang="ts">
  import ListaTodos from '@/modules/principal/components/ListaTodos.vue'
</script>
