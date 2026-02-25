<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleSubmit = () => {
  console.log({
    username: username.value,
    password: password.value,
  })
}
</script>

<template>
  <div class="w-full max-w-md px-6 py-12">
    <div
      class="glass-card bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 shadow-2xl rounded-3xl p-8 md:p-10 transition-all duration-300"
    >
      <!-- HEADER -->
      <div class="flex flex-col items-center gap-6 mb-10">
        <div class="flex items-center justify-center gap-4">
          <div
            class="h-12 px-3 flex items-center justify-center bg-warning/50 rounded-lg"
          >
            <span class="text-base-content font-bold text-xl tracking-tighter"> UANL </span>
          </div>

          <div class="h-8 w-px bg-white/30 dark:bg-white/20"></div>

          <div class="flex items-center gap-2">
            <!-- <i class="fa-brands fa-neos"></i> -->
            <span class="text-base-content font-semibold text-2xl tracking-tight"> Nexus </span>
          </div>
        </div>

        <div class="text-center">
          <h1 class="text-2xl font-bold text-base-content/70">
            Banco de Reactivos
          </h1>
          <p class="text-sm text-base-content/50">Gestor de bancos para reactivos</p>
        </div>
      </div>

      <!-- FORM -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Usuario -->
        <div>
          <label class="block text-sm font-medium text-base-content/30 mb-2"> Usuario </label>

          <div class="relative group">
            <i
              class="fa-regular fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"
            ></i>

            <input
              v-model="username"
              type="text"
              class="w-full pl-10 pr-4 py-3 bg-base-200/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary
               text-base-content placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none"
            />
          </div>
        </div>

        <!-- Password -->
        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="block text-sm font-medium text-base-content/30">
              Contraseña
            </label>

<a href="#" class="text-xs font-semibold text-primary hover:underline"> ¿Olvidaste tu contraseña? </a>
          </div>

          <div class="relative group">
            <!-- <i
              class="fa-regular fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"
            ></i> -->
            <i class="fas fa-key absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors"></i>

            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="w-full pl-10 pr-4 py-3 bg-base-200/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary
               text-base-content placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none""
            />
            <!-- Toggle Password -->
            <button
              type="button"
              @click="togglePassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
            >
              <i :class="showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'"></i>
            </button>

          </div>
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-[0.98]"
        >
          Iniciar Sesión
        </button>
      </form>

      <!-- Footer -->
      <div class="mt-8 text-center border-t border-gray-200 dark:border-white/10 pt-6">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          ¿No tienes una cuenta?
          <a class="font-semibold text-primary hover:underline" href="#">
            Contacta a tu facultad
          </a>
        </p>
      </div>
    </div>
    <!-- <div
      class="mt-8 flex justify-center items-center gap-6 text-slate-500/80 dark:text-slate-400/50 text-[10px] uppercase tracking-widest font-bold"
    >
      <span class="flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
        
      </span>
      <span>v.0.0.1</span>
    </div> -->
    <div class="mt-8 text-center text-white/60 text-xs">
      <p>© 2024 Universidad Autónoma de Nuevo León</p>
      <div class="flex justify-center gap-4 mt-2">
        <a class="hover:text-white" href="#">Aviso de Privacidad</a>
        <span class="text-white/20">•</span>
        <a class="hover:text-white" href="#">v.0.0.1</a>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.glass-card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
}
</style>
