<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const showPassword = ref(false)
const remember = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')
}
</script>

<template>
  <!-- Card -->
  <div class="relative z-10 w-full max-w-md px-6">
    <div
      class="card glass-card bg-white/10 backdrop-blur-xl shadow-2xl border border-white/30 rounded-3xl"
    >
      <!-- class="card bg-base-100/80 backdrop-blur-xl shadow-2xl border border-base-content/10 rounded-3xl" -->
      <div class="card-body p-8">
        <!-- Logo -->
        <div class="flex flex-col items-center gap-6 mb-6">
          <div class="flex items-center gap-4">
            <div class="bg-white/10 px-3 py-2 rounded-lg">
              <span class="font-bold text-base-content text-xl tracking-tight"> UANL </span>
            </div>
            <div class="w-px h-8 bg-base-content/20"></div>
            <div class="flex items-center gap-2">
              <span class="font-semibold text-2xl text-base-content">Nexus</span>
            </div>
          </div>

          <div class="text-center text-base-content">
            <h1 class="text-2xl font-bold">Banco de Reactivos</h1>
            <p class="text-sm opacity-70">Ingresa a tu cuenta</p>
          </div>
        </div>

        <!-- Form -->
        <form class="space-y-5">
          <!-- Usuario -->
          <div class="form-control w-full">
            <label class="label text-base-content">
              <span class="label-text">Usuario / Matrícula</span>
            </label>

            <div class="relative">
              <!-- Icono izquierdo -->
              <i
                class="fa-solid fa-user absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 z-10 pointer-events-none"
              ></i>

              <input v-model="username" type="text" class="input input-bordered w-full pl-10" />
            </div>
          </div>

          <!-- Password -->
          <div class="form-control w-full">
            <div class="flex justify-between">
              <label class="label text-white">
                <span class="label-text">Contraseña</span>
              </label>
              <a class="text-sm text-primary hover:underline cursor-pointer">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <div class="relative">
              <!-- Icono izquierdo -->
              <i
                class="fa-solid fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50 z-10 pointer-events-none"
              ></i>

              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                class="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-black/20 border border-gray-300 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none"
              />

              <!-- Icono derecho 1 (mostrar/ocultar) -->
              <button
                type="button"
                @click="togglePassword"
                class="absolute right-10 top-1/2 -translate-y-1/2 text-base-content/50 hover:text-primary"
              >
                <i :class="showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"></i>
              </button>
            </div>
          </div>

          <!-- Remember -->
          <!-- <div class="form-control">
              <label class="cursor-pointer label justify-start gap-2">
                <input type="checkbox" v-model="remember" class="checkbox checkbox-primary" />
                <span class="label-text">Mantener sesión iniciada</span>
              </label>
            </div> -->

          <!-- Button -->
          <button class="btn btn-primary w-full">Iniciar Sesión</button>
        </form>

        <!-- Footer -->
        <div class="divider my-6"></div>

        <p class="text-sm text-center text-gray-500 opacity-70">
          ¿No tienes una cuenta?
          <a class="text-primary hover:underline cursor-pointer"> Contacta a tu facultad </a>
        </p>
      </div>
    </div>

    <!-- Bottom text -->
    <div class="mt-8 text-center text-xs text-white/70">
      © 2024 Universidad Autónoma de Nuevo León
    </div>
  </div>

  <!-- Theme toggle -->

  <label class="swap swap-rotate fixed bottom-6 right-6">
    <!-- this hidden checkbox controls the state -->
  </label>
</template>
<style scoped>
.glass-card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(5px) saturate(180%);
}
</style>
