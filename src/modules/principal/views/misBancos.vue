<template>
  <div class="flex flex-row">
    <div class="basis-10/12">
      <h1 class="text-4xl font-bold text">Administración de Bancos</h1>
    </div>
    <div class="basis-2/12 justify-center items-center flex">
      <button
        class="btn btn-primary hover:bg-primary/90 rounded-lg flex items-center gap-2 shadow-lg shadow-primary/20 transition-all duration-300"
      >
        <i class="fa-regular fa-folder-medical"></i>Agregar Carpeta
      </button>
    </div>
  </div>

  <p class="text-(--color-texto) mt-2 mb-4">
    Gestione sus bancosde de preguntas y carpetas de estudio de manera centralizada
  </p>
  <!-- <code class="font-mono">ID-2391</code>
  <span class="font-mono text-sm">USR-98213</span> -->
  <!--  -->
  <div class="tabs tabs-lg tabs-border">
    <button
      class="tab"
      @click="tab = 'todos'"
      :class="{ 'tab-active text-primary ': tab === 'todos' }"
    >
      Todos
    </button>
    <button
      class="tab px-8"
      @click="tab = 'carpetas'"
      :class="{ 'tab-active text-primary ': tab === 'carpetas' }"
    >
      Carpetas
    </button>
  </div>
  <div class="flex border-t border-base-300 pt-5">
    <KeepAlive>
      <component :is="components[tab]" />
    </KeepAlive>
  </div>
</template>
<script setup lang="ts">
  import { KeepAlive, ref } from 'vue'

  import ListaTodos from '@/modules/principal/components/ListaTodos.vue'
  import ListaCarpetas from '@/modules/principal/components/ListaCarpetas.vue'

  const tab = ref<'todos' | 'carpetas'>('todos')

  const components = {
    todos: ListaTodos,
    carpetas: ListaCarpetas
  }
</script>
