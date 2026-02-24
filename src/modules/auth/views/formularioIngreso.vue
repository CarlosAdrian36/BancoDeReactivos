<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleSubmit = () => {
  console.log('Login:', {
    username: username.value,
    password: password.value,
  })
}
</script>

<template>
  <div
    class="glass-card bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 shadow-2xl rounded-3xl p-8 md:p-10 transition-all duration-300"
  >
    <!-- Header -->
    <div class="flex items-center justify-center gap-4">
      <div
        class="h-12 w-auto flex items-center justify-center bg-white/20 dark:bg-white/10 rounded-lg px-3"
      >
        <span class="text-primary dark:text-base-content font-bold text-xl tracking-tighter"
          >UANL</span
        >
      </div>
      <div class="h-8 bg-white/30 dark:bg-white/20"></div>
      <div class="flex items-center gap-2">
        <span class="text-primary dark:text-base-content font-semibold text-2xl tracking-tight"
          >Nexus</span
        >
      </div>
    </div>
    <div class="text-center mb-8">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-base-content mb-1">
        Banco de Reactivos
      </h1>
      <p class="text-sm text-gray-600 dark:text-gray-300">Ingresa a tu cuenta institucional</p>
    </div>

    <!-- Form -->
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Usuario -->
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          Usuario / Matrícula
        </label>

        <div class="relative group">
          <i
            class="fa-light fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-lg"
          ></i>

          <input
            v-model="username"
            type="text"
            placeholder="Ej. 1234567"
            class="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none"
          />
        </div>
      </div>

      <!-- Password -->
      <div>
        <div class="flex justify-between items-center mb-2">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Contraseña
          </label>
          <a href="#" class="text-xs font-semibold text-primary dark:text-blue-400 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <div class="relative group">
          <i
            class="fa-light fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-lg"
          ></i>

          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="••••••••"
            class="w-full pl-10 pr-12 py-3 bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none"
          />

          <!-- Toggle -->
          <button
            type="button"
            @click="togglePassword"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
          >
            <i :class="showPassword ? 'fa-light fa-eye-slash' : 'fa-light fa-eye'"></i>
          </button>
        </div>
      </div>

      <!-- Remember -->
      <div class="flex items-center">
        <input
          type="checkbox"
          class="w-4 h-4 text-primary bg-white/50 dark:bg-black/20 border-gray-300 dark:border-white/10 rounded focus:ring-primary"
        />
        <label class="ml-2 text-sm text-gray-600 dark:text-gray-300">
          Mantener sesión iniciada
        </label>
      </div>

      <!-- Button -->
      <button
        type="submit"
        class="w-full py-4 bg-primary hover:bg-blue-800 text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-[0.98]"
      >
        Iniciar Sesión
      </button>
    </form>
  </div>
</template>

<style scoped>
.glass-card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
}
</style>
