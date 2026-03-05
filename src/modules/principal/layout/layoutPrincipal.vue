<script setup lang="ts">
  import { ref } from 'vue'
  import topMenu from '../components/topMenu.vue'

  const isDrawerOpen = ref(true)

  const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value
  }

  // const closeDrawer = () => {
  //   isDrawerOpen.value = false
  // }
</script>
<!-- <TopMenu2 @toggle="toggleDrawer" />  -->

<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <topMenu @toggle="toggleDrawer" />

    <div class="drawer lg:drawer-open flex-1">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" v-model="isDrawerOpen" />

      <div class="drawer-content">
        <div class="p-4">Page Content</div>
      </div>

      <div class="drawer-side">
        <label for="my-drawer-4" class="drawer-overlay"></label>

        <aside
          class="flex h-full flex-col bg-base-100 border-r border-primary/10 transition-all duration-300 shrink-0 overflow-hidden"
          :class="isDrawerOpen ? 'w-80' : 'w-0'"
        >
          <!-- 🔹 Sección superior -->
          <div class="flex flex-col gap-1 p-6">
            <p
              v-if="isDrawerOpen"
              class="px-3 text-[11px] font-bold uppercase tracking-widest text-primary/40 mb-3"
            >
              Navegacion
            </p>

            <!-- Item -->
            <button
              class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-base-200 cursor-pointer"
            >
              <!-- Espacio para icono -->
              <div class="w-5 h-5">
                <i class="fa-solid fa-grid-2"></i>
              </div>
              <span v-if="isDrawerOpen">Todo</span>
            </button>

            <button
              class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-base-200 cursor-pointer"
            >
              <div class="w-5 h-5"><i class="fa-sharp-duotone fa-solid fa-folder-open"></i></div>
              <span v-if="isDrawerOpen">Carpetas</span>
            </button>

            <button
              class="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-base-200 cursor-pointer"
            >
              <div class="w-5 h-5">
                <i class="fa-solid fa-users"></i>
              </div>
              <span v-if="isDrawerOpen">Gestión de miembros del CAD</span>
            </button>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
