<template>
  <div class="w-full p-6">
    <!-- GRID -->
    <div class="grid gap-6" style="grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))">
      <!-- CARD 1 -->
      <div
        v-for="x in itemsall"
        class="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow max-w-md"
      >
        <div class="card-body">
          <div class="flex items-start justify-between mb-2">
            <div class="bg-primary/10 p-4 rounded-xl flex items-center justify-center">
              <i class="fa-regular fa-file-lines text-primary text-3xl"></i>
            </div>

            <span class="badge badge-success badge-sm">Activo</span>
          </div>

          <h3 class="text-lg font-bold">{{ x.titulo }}</h3>

          <p class="text-base-content/60 text-sm">
            Sede Principal - Laboratorio de Biotecnología Molecular
          </p>

          <div class="grid grid-cols-2 gap-4 border-t border-base-200 pt-4 mt-4">
            <div>
              <p class="text-xs uppercase font-bold tracking-widest text-base-content/50">
                Total Reactivos
              </p>
              <p class="text-lg font-bold">{{ x.reactivos }}</p>
            </div>

            <div>
              <p class="text-xs uppercase font-bold tracking-widest text-base-content/50">
                PRogreso
              </p>
              <p class="text-lg font-bold">{{ x.progreso }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Card de carpetas grandes -->
      <div
        v-for="n in itemsall"
        :key="n.id"
        @click="abrirCarpeta(n.id)"
        class="card bg-warning/10 border border-base-200 shadow-sm hover:shadow-md transition max-w-md cursor-pointer"
      >
        <div class="card-body">
          <div class="flex items-center gap-3">
            <div class="size-12 text-warning rounded-lg flex items-center justify-center">
              <i class="fa-regular fa-folder text-2xl"></i>
            </div>

            <h2 class="text-sm font-bold line-clamp-3 min-w-0 flex-1">
              {{ n.titulo }}
            </h2>
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost btn-sm">
                <i class="fa-light fa-ellipsis-vertical"></i>
              </div>

              <ul
                @click.stop
                tabindex="-1"
                class="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm"
              >
                <li class="pb-2">
                  <button class="btn btn-soft btn-info">
                    <i class="fa-regular fa-pen-to-square mr-2"></i>
                    Editar
                  </button>
                </li>
                <li>
                  <button class="btn btn-soft btn-error">
                    <i class="fa-regular fa-trash-can mr-2"></i>
                    Borrar
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <h1>
              <span
                class="badge badge-soft font-sans text-xs mt-1 mb-2"
                :class="getMateriaColor(n.materia)"
              >
                {{ n.materia }}
              </span>
            </h1>
            <span class="text-slate-400 text-xs mt-1 mb-2">•</span>
            <h1 class="font-mono text-(--color-texto) text-xs mt-1 mb-2">
              {{ n.reactivos }}
              <span class="font-sans">Bancos</span>
            </h1>
          </div>
          <span class="font-sans text-xs text-(--color-texto) mt-1 mb-2">
            {{ n.fecha }}
          </span>
        </div>
      </div>

      <!-- Card de carpetas -->

      <div
        v-for="n in itemsall"
        :key="n.id"
        class="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition h-40 cursor-pointer"
      >
        <div class="card-body">
          <div class="flex items-center gap-3">
            <div class="size-12 text-warning rounded-lg flex items-center justify-center">
              <i class="fa-regular fa-folder text-2xl"></i>
            </div>

            <h2 class="text-sm font-bold line-clamp-3 min-w-0 flex-1">
              {{ n.titulo }}
            </h2>
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost btn-sm">
                <i class="fa-light fa-ellipsis-vertical"></i>
              </div>

              <ul
                tabindex="-1"
                class="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm"
              >
                <li class="pb-2">
                  <button class="btn btn-soft btn-info">
                    <i class="fa-regular fa-pen-to-square mr-2"></i>
                    Editar
                  </button>
                </li>
                <li>
                  <button class="btn btn-soft btn-error">
                    <i class="fa-regular fa-trash-can mr-2"></i>
                    Borrar
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <h1>
              <span
                class="badge badge-soft font-sans text-xs mt-1 mb-2"
                :class="getMateriaColor(n.materia)"
              >
                {{ n.materia }}
              </span>
            </h1>
            <span class="text-slate-400 text-xs">•</span>
            <h1 class="font-mono text-(--color-texto) text-xs mt-2 mb-1">
              {{ n.reactivos }}
              <span class="font-sans">Bancos</span>
            </h1>
          </div>
          <span class="font-sans text-xs text-(--color-texto) mt-1 mb-2">
            {{ n.fecha }}
          </span>
        </div>
      </div>

      <!-- CARD 2 -->
      <div
        class="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition h-40 cursor-pointer"
      >
        511 px
        <div class="card-body">
          <div class="flex items-center gap-3">
            <div class="size-12 text-primary rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-layer-group text-2xl"></i>
            </div>
            <h2 class="text-sm font-bold line-clamp-3 min-w-0">
              <!-- {{ n.titulo }} -->
              Esto es un banco de prueba para mostrar el diseño de la tarjeta, no es un banco real
            </h2>
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost btn-sm">
                <i class="fa-light fa-ellipsis-vertical"></i>
              </div>

              <ul
                tabindex="-1"
                class="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm"
              >
                <li class="pb-2">
                  <button class="btn btn-soft btn-info">
                    <i class="fa-regular fa-pen-to-square mr-2"></i>
                    Editar
                  </button>
                </li>
                <li>
                  <button class="btn btn-soft btn-error">
                    <i class="fa-regular fa-trash-can mr-2"></i>
                    Borrar
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- CARD 3 -->
      <div
        v-for="n in itemsall"
        :key="n.id"
        class="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition h-40 cursor-pointer"
      >
        <div class="card-body">
          <div class="flex items-center gap-3">
            <div class="size-12 text-primary rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-layer-group text-2xl"></i>
            </div>
            <h2 class="text-sm font-bold line-clamp-3 min-w-0">
              {{ n.titulo }}
            </h2>
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost btn-sm">
                <i class="fa-light fa-ellipsis-vertical"></i>
              </div>
              <ul
                tabindex="-1"
                class="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm"
              >
                <li class="pb-2">
                  <button class="btn btn-soft btn-info">
                    <i class="fa-regular fa-pen-to-square mr-2"></i>
                    Editar
                  </button>
                </li>
                <li>
                  <button class="btn btn-soft btn-error">
                    <i class="fa-regular fa-trash-can mr-2"></i>
                    Borrar
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <!-- <code class="font-mono">ID-2391</code> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const abrirCarpeta = (id: number) => {
    router.push({
      name: 'CarpetaBanco',
      params: { carpetaId: id }
    })
  }
  const materiaColors: Record<string, string> = {
    Biología: 'badge-success text-green-800',
    Química: 'badge-warning text-yellow-800',
    Física: 'badge-info text-blue-800',
    Matemáticas: 'badge-primary text-purple-800',
    Historia: 'badge-secondary text-gray-800',
    Literatura: 'badge-accent text-pink-800',
    Lenguaje: 'badge-error'
  }

  const getMateriaColor = (materia: string) => {
    return materiaColors[materia] || 'badge-neutral'
  }
  const itemsall = [
    {
      id: 1,
      titulo: 'Biología Molecular - 3ro Secundaria',
      materia: 'Biología',
      reactivos: 42,
      progreso: 85,
      fecha: 'Hace 2 horas'
    },
    {
      id: 2,
      titulo: 'Química Orgánica - Nivel Intermedio',
      materia: 'Química',
      reactivos: 28,
      progreso: 60,
      fecha: 'Hace 1 día'
    },
    {
      id: 3,
      titulo: 'Física Cuántica Básica',
      materia: 'Física',
      reactivos: 33,
      progreso: 40,
      fecha: 'Hace 3 días'
    },
    {
      id: 4,
      titulo: 'Álgebra Lineal y Matrices',
      materia: 'Matemáticas',
      reactivos: 50,
      progreso: 72,
      fecha: 'Hace 4 horas'
    },
    {
      id: 5,
      titulo: 'Historia de México - Independencia',
      materia: 'Historia',
      reactivos: 19,
      progreso: 30,
      fecha: 'Hace 5 horas'
    },
    {
      id: 6,
      titulo: 'Geometría Analítica',
      materia: 'Matemáticas',
      reactivos: 37,
      progreso: 55,
      fecha: 'Hace 2 días'
    },
    {
      id: 7,
      titulo: 'Genética y Herencia',
      materia: 'Biología',
      reactivos: 24,
      progreso: 68,
      fecha: 'Hace 6 horas'
    }
  ]
</script>
