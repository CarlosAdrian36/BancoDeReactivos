<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import { computed } from 'vue'

  const route = useRoute()
  const router = useRouter()

  const breadcrumbs = computed(() => {
    return route.matched
      .filter(r => r.meta?.breadcrumb)
      .map(r => {
        const label =
          typeof r.meta.breadcrumb === 'function' ? r.meta.breadcrumb(route) : r.meta.breadcrumb

        return {
          label,
          to: {
            name: r.name as string,
            params: route.params
          }
        }
      })
  })
</script>

<template>
  <div class="text-sm breadcrumbs mb-4">
    <ul class="bg-base-100 px-4 py-2 rounded-lg shadow-sm">
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <a class="cursor-pointer" @click="router.push(crumb.to)">
          {{ crumb.label }}
        </a>
      </li>
    </ul>
  </div>
</template>
