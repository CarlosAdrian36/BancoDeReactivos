<script setup lang="ts">
  import { ref } from 'vue'
  import topMenu from '../components/topMenu.vue'

  const isDrawerOpen = ref(true)

  const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value
  }
</script>

<template>
  <div class="flex flex-col h-screen">
    <!-- TOP MENU -->
    <topMenu @toggle="toggleDrawer" class="z-50" />

    <!-- CONTENEDOR -->
    <div class="flex flex-1 overflow-hidden">
      <!-- SIDEBAR -->
      <aside
        class="bg-base-100 border-r border-primary/10 transition-all duration-300 overflow-y-auto fixed lg:static top-16 left-0 h-[calc(100vh-4rem)] z-40"
        :class="isDrawerOpen ? 'w-64' : 'w-0 '"
      >
        <div
          class="flex flex-col gap-1 p-4 transition-opacity duration-200"
          :class="isDrawerOpen ? 'opacity-100' : 'opacity-0 '"
        >
          <p
            v-if="isDrawerOpen"
            class="px-3 text-[11px] font-bold uppercase tracking-widest text-primary/40 mb-2"
          >
            Navegación
          </p>

          <!-- LINK -->
          <router-link v-slot="{ isActive, navigate }" :to="{ name: 'Todo' }">
            <a
              @click="navigate"
              :class="[
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary-content text-primary'
                  : 'text-(--color-texto) hover:bg-base-200'
              ]"
            >
              <i class="fa-regular fa-house text-xl"></i>
              <span v-if="isDrawerOpen">Inicio</span>
            </a>
          </router-link>

          <router-link v-slot="{ isActive, navigate }" :to="{ name: 'Carpetas' }">
            <a
              @click="navigate"
              :class="[
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary-content text-primary'
                  : ' text-(--color-texto) hover:bg-base-200'
              ]"
            >
              <i class="fa-regular fa-folder-user text-xl"></i>
              <span v-if="isDrawerOpen">Mis Bancos</span>
            </a>
          </router-link>

          <router-link v-slot="{ isActive, navigate }" :to="{ name: 'Gestion de Miembros' }">
            <a
              @click="navigate"
              :class="[
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary-content text-primary'
                  : 'text-(--color-texto) hover:bg-base-200'
              ]"
            >
              <i class="fa-regular fa-user-group text-xl"></i>
              <span v-if="isDrawerOpen">Colaboradores</span>
            </a>
          </router-link>
        </div>
      </aside>

      <!-- CONTENIDO -->
      <main class="flex-1 overflow-y-auto bg-base-200 p-8">
        <router-view />
      </main>
    </div>
  </div>
</template>
