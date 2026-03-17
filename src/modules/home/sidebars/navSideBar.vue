<template>
  <router-link v-slot="{ isActive, navigate }" :to="{ name: 'MisBancos' }">
    <a
      @click="navigate"
      :class="[
        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
        isActive ? 'bg-primary-content text-primary' : ' text-(--color-texto) hover:bg-base-200'
      ]"
    >
      <i class="fa-regular fa-folder-user text-xl"></i>
      <span>Mis Bancos</span>
    </a>
  </router-link>

  <router-link v-slot="{ isActive, navigate }" :to="{ name: 'Gestion de Miembros' }">
    <a
      @click="navigate"
      :class="[
        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
        isActive ? 'bg-primary-content text-primary' : 'text-(--color-texto) hover:bg-base-200'
      ]"
    >
      <i class="fa-regular fa-user-group text-xl"></i>
      <span>Colaboradores</span>
    </a>
  </router-link>
</template>
