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
  <div
    class="min-h-screen flex items-center justify-center bg-base-200 dark:bg-base-300 relative overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img
        class="w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO0ld59NQrhIS5oJWDWOOX-T_nYByXS-eYNP2WR0b346Dqhg4eIIGp9-ilZf98-GaMQ2oXcJOJt4SgDzNBgrP22OgCs2EhTblLugrQqOsy4gS7dKCUuwZ4cKZDL28WZXW7i6c8JrxBzvAxtu3-OLqwBLJGBwa-uVZD1TOmt1ipBi0TIGCLT5xYScczhuIx9kLQvdUqeJ5R4HxTbQb4Ee2cvjmIcHLmS0Nml9vDszylnINYzTe7-X_WcgazUpXnbUM6l6oeqDi42Q"
        alt="Background"
      />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Card -->
    <div class="relative z-10 w-full max-w-md px-6">
      <div
        class="card bg-base-100/10 backdrop-blur-xl shadow-2xl border border-base-content/10 rounded-3xl"
      >
        <!-- class="card bg-base-100/80 backdrop-blur-xl shadow-2xl border border-base-content/10 rounded-3xl" -->
        <div class="card-body p-8">
          <!-- Logo -->
          <div class="flex flex-col items-center gap-6 mb-6">
            <div class="flex items-center gap-4">
              <div class="bg-primary/10 px-3 py-2 rounded-lg">
                <span class="font-bold text-primary text-xl tracking-tight"> UANL </span>
              </div>
              <div class="w-px h-8 bg-base-content/20"></div>
              <div class="flex items-center gap-2">
                <span class="material-icons text-primary">hub</span>
                <span class="font-semibold text-2xl">Nexus</span>
              </div>
            </div>

            <div class="text-center">
              <h1 class="text-2xl font-bold">Banco de Reactivos</h1>
              <p class="text-sm opacity-70">Ingresa a tu cuenta</p>
            </div>
          </div>

          <!-- Form -->
          <form class="space-y-5">
            <!-- Usuario -->
            <div class="form-control w-full">
              <label class="label">
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
                <label class="label">
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
                  class="input input-bordered w-full pl-10 pr-20"
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

          <p class="text-sm text-center opacity-70">
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
      <input type="checkbox" class="theme-controller" value="dark" />

      <!-- sun icon -->
      <svg
        class="swap-off h-10 w-10 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
        />
      </svg>

      <!-- moon icon -->
      <svg
        class="swap-on h-10 w-10 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
        />
      </svg>
    </label>
  </div>
</template>
