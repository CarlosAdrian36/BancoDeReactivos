<template>
  <div class="flex flex-row">
    <div class="basis-10/12">
      <h1 class="text-4xl font-bold text">Administración de Bancos</h1>
    </div>
  </div>

  <p class="text-(--color-texto) mt-2 mb-4">
    Gestione sus bancosde de preguntas y carpetas de estudio de manera centralizada
  </p>
  <!-- <code class="font-mono">ID-2391</code>
  <span class="font-mono text-sm">USR-98213</span> -->
  <!--  -->
  <div class="flex flex-row justify-between">
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
    <div>
      <ul class="menu menu-horizontal bg-base-200 rounded-box">
        <li>
          <a>
            <i class="fa-regular fa-list"></i>
          </a>
        </li>
        <li>
          <a>
            <i class="fa-regular fa-grid"></i>
          </a>
        </li>
      </ul>
    </div>
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
