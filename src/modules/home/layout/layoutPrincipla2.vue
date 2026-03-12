<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import TopMenu from '@/modules/principal/components/topMenu.vue'

  const route = useRoute()
  const isDrawerOpen = ref(true)

  const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value
  }
  const sidebarComponent = computed(() => {
    const matched = route.matched
    return matched[matched.length - 1]?.meta?.sidebar
  })
</script>

<template>
  <div class="flex flex-col h-screen">
    <TopMenu @toggle="toggleDrawer" class="z-50" />

    <div class="flex flex-1 overflow-hidden">
      <!-- SIDEBAR -->
      <aside
        v-show="isDrawerOpen"
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

          <component v-if="sidebarComponent" :is="sidebarComponent" />
        </div>
      </aside>

      <!-- CONTENIDO -->
      <main class="flex-1 overflow-y-auto p-6 bg-base-200"><RouterView /></main>
    </div>
  </div>
</template>
