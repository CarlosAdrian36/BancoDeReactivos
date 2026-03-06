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
    <div class="drawer lg:drawer-open flex-1">
      <input type="checkbox" class="drawer-toggle" v-model="isDrawerOpen" />
      <div class="drawer-content flex flex-col">
        <div class="p-8 bg-base-200 flex-1"><router-view></router-view></div>
      </div>

      <div class="drawer-side">
        <aside
          class="flex h-full flex-col bg-base-100 border-r border-primary/10 transition-all duration-300 shrink-0 overflow-hidden"
          :class="isDrawerOpen ? 'w-64 opacity-100' : 'w-0 opacity-0 '"
        >
          <div class="flex flex-col gap-1 p-6">
            <p
              class="px-3 text-[11px] font-bold uppercase tracking-widest text-primary/40 mb-3"
              v-if="isDrawerOpen"
            >
              Navegacion
            </p>
            <router-link v-slot="{ isActive, navigate }" :to="{ name: 'Todo' }">
              <a
                @click="navigate"
                :class="[
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary-content text-primary'
                    : 'text-base-content/75 hover:bg-base-200'
                ]"
              >
                <span><i class="fa-solid fa-house"></i></span>
                <span class="text-sm font-medium">Inicio</span>
              </a>
            </router-link>

            <router-link v-slot="{ isActive, navigate }" :to="{ name: 'Carpetas' }">
              <a
                @click="navigate"
                :class="[
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary-content text-primary'
                    : 'text-base-content/75 hover:bg-base-200'
                ]"
              >
                <div class="w-5 h-5"><i class="fa-solid fa-folder-user"></i></div>
                <span>Mis Carpetas</span>
              </a>
            </router-link>

            <router-link v-slot="{ isActive, navigate }" :to="{ name: 'Gestion de Miembros' }">
              <a
                @click="navigate"
                :class="[
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary-content text-primary'
                    : 'text-base-content/75 hover:bg-base-200'
                ]"
              >
                <div class="w-5 h-5"><i class="fa-solid fa-users"></i></div>
                <span>Colaboradores</span>
              </a>
            </router-link>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
