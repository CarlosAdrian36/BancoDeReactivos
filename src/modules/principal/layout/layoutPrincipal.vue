<script setup lang="ts">
  import { ref } from 'vue'
  import topMenu from '../components/topMenu.vue'

  const isDrawerOpen = ref(true)

  const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value
  }
</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <topMenu @toggle="toggleDrawer" />
    <div class="drawer lg:drawer-open">
      <input type="checkbox" class="drawer-toggle" v-model="isDrawerOpen" />
      <div class="drawer-content">
        <div class="p-4"><router-view></router-view></div>
      </div>

      <div class="drawer-side">
        <aside
          class="flex h-full flex-col bg-base-100 border-r border-primary/10 transition-all duration-300 shrink-0 overflow-hidden"
          :class="isDrawerOpen ? 'w-80 opacity-100' : 'w-0 opacity-0 '"
        >
          <div class="flex flex-col gap-1 p-6">
            <p
              class="px-3 text-[11px] font-bold uppercase tracking-widest text-primary/40 mb-3"
              v-if="isDrawerOpen"
            >
              Navegacion
            </p>
            <router-link
              :to="{ name: 'Todo' }"
              class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-base-200 cursor-pointer"
            >
              <div class="w-5 h-5"><i class="fa-solid fa-grid-2"></i></div>
              <span>Todo</span>
            </router-link>
            <router-link
              :to="{ name: 'Carpetas' }"
              class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-base-200 cursor-pointer"
            >
              <div class="w-5 h-5"><i class="fa-sharp-duotone fa-solid fa-folder-open"></i></div>
              <span>Carpetas</span>
            </router-link>
            <router-link
              :to="{ name: 'Gestion de Miembros' }"
              class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-base-200 cursor-pointer"
            >
              <div class="w-5 h-5"><i class="fa-solid fa-users"></i></div>
              <span>Gestion de Miembros</span>
            </router-link>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
