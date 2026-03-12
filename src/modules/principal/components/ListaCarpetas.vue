<template>
  <div class="w-full p-6">
    <!-- GRID -->
    <div class="grid gap-6" style="grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))">
      <!-- CARD 2 -->
      <div
        class="card border border-base-200 shadow-sm hover:shadow-md transition h-40 cursor-pointer group"
      >
        <div
          class="card-body bg-base-100 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-primary/40 rounded-xl group-hover:border-primary transition"
        >
          <i class="fa-regular fa-folder-plus text-3xl text-primary"></i>

          <span class="text-sm font-medium text-primary"> Agregar Carpeta </span>
        </div>
      </div>

      <div
        v-for="n in items"
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
    </div>
  </div>
</template>

<script setup lang="ts">
  const items = [
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
    }
    // {
    //   id: 3,
    //   titulo: 'Física Cuántica Básica',
    //   materia: 'Física',
    //   reactivos: 33,
    //   progreso: 40,
    //   fecha: 'Hace 3 días'
    // },
    // {
    //   id: 4,
    //   titulo: 'Álgebra Lineal y Matrices',
    //   materia: 'Matemáticas',
    //   reactivos: 50,
    //   progreso: 72,
    //   fecha: 'Hace 4 horas'
    // },
    // {
    //   id: 5,
    //   titulo: 'Historia de México - Independencia',
    //   materia: 'Historia',
    //   reactivos: 19,
    //   progreso: 30,
    //   fecha: 'Hace 5 horas'
    // },
    // {
    //   id: 6,
    //   titulo: 'Geometría Analítica',
    //   materia: 'Matemáticas',
    //   reactivos: 37,
    //   progreso: 55,
    //   fecha: 'Hace 2 días'
    // },
    // {
    //   id: 7,
    //   titulo: 'Genética y Herencia',
    //   materia: 'Biología',
    //   reactivos: 24,
    //   progreso: 68,
    //   fecha: 'Hace 6 horas'
    // },
    // {
    //   id: 8,
    //   titulo: 'Termodinámica Aplicada',
    //   materia: 'Física',
    //   reactivos: 45,
    //   progreso: 80,
    //   fecha: 'Hace 1 hora'
    // },
    // {
    //   id: 9,
    //   titulo: 'Literatura Española del Siglo XX',
    //   materia: 'Literatura',
    //   reactivos: 15,
    //   progreso: 25,
    //   fecha: 'Hace 7 horas'
    // },
    // {
    //   id: 10,
    //   titulo: 'Cálculo Diferencial',
    //   materia: 'Matemáticas',
    //   reactivos: 60,
    //   progreso: 90,
    //   fecha: 'Hace 3 horas'
    // },
    // {
    //   id: 11,
    //   titulo: 'Células y Tejidos',
    //   materia: 'Biología',
    //   reactivos: 22,
    //   progreso: 47,
    //   fecha: 'Hace 9 horas'
    // },
    // {
    //   id: 12,
    //   titulo: 'Química Inorgánica Avanzada',
    //   materia: 'Química',
    //   reactivos: 35,
    //   progreso: 52,
    //   fecha: 'Hace 1 día'
    // },
    // {
    //   id: 13,
    //   titulo: 'Ecuaciones Diferenciales',
    //   materia: 'Matemáticas',
    //   reactivos: 41,
    //   progreso: 63,
    //   fecha: 'Hace 10 horas'
    // },
    // {
    //   id: 14,
    //   titulo: 'Electricidad y Magnetismo',
    //   materia: 'Física',
    //   reactivos: 38,
    //   progreso: 71,
    //   fecha: 'Hace 12 horas'
    // },
    // {
    //   id: 15,
    //   titulo: 'Historia Universal - Edad Media',
    //   materia: 'Historia',
    //   reactivos: 26,
    //   progreso: 36,
    //   fecha: 'Hace 2 días'
    // },
    // {
    //   id: 16,
    //   titulo: 'Bioquímica Metabólica',
    //   materia: 'Biología',
    //   reactivos: 29,
    //   progreso: 44,
    //   fecha: 'Hace 14 horas'
    // },
    // {
    //   id: 17,
    //   titulo: 'Estadística y Probabilidad',
    //   materia: 'Matemáticas',
    //   reactivos: 34,
    //   progreso: 58,
    //   fecha: 'Hace 6 horas'
    // },
    // {
    //   id: 18,
    //   titulo: 'Física Mecánica Clásica',
    //   materia: 'Física',
    //   reactivos: 48,
    //   progreso: 76,
    //   fecha: 'Hace 3 días'
    // },
    // {
    //   id: 19,
    //   titulo: 'Química de Soluciones',
    //   materia: 'Química',
    //   reactivos: 27,
    //   progreso: 49,
    //   fecha: 'Hace 18 horas'
    // },
    // {
    //   id: 20,
    //   titulo: 'Redacción y Comprensión Lectora',
    //   materia: 'Lenguaje',
    //   reactivos: 21,
    //   progreso: 33,
    //   fecha: 'Hace 1 día'
    // },
    // {
    //   id: 21,
    //   titulo: 'Trigonometría Aplicada',
    //   materia: 'Matemáticas',
    //   reactivos: 39,
    //   progreso: 65,
    //   fecha: 'Hace 20 horas'
    // },
    // {
    //   id: 22,
    //   titulo: 'Anatomía Humana Básica',
    //   materia: 'Biología',
    //   reactivos: 31,
    //   progreso: 54,
    //   fecha: 'Hace 22 horas'
    // },
    // {
    //   id: 23,
    //   titulo: 'Historia de América Latina',
    //   materia: 'Historia',
    //   reactivos: 17,
    //   progreso: 29,
    //   fecha: 'Hace 2 días'
    // },
    // {
    //   id: 24,
    //   titulo: 'Cinemática y Movimiento',
    //   materia: 'Física',
    //   reactivos: 36,
    //   progreso: 62,
    //   fecha: 'Hace 11 horas'
    // },
    // {
    //   id: 25,
    //   titulo: 'Química Analítica',
    //   materia: 'Química',
    //   reactivos: 44,
    //   progreso: 81,
    //   fecha: 'Hace 7 horas'
    // },
    // {
    //   id: 26,
    //   titulo: 'Lógica Matemática',
    //   materia: 'Matemáticas',
    //   reactivos: 23,
    //   progreso: 46,
    //   fecha: 'Hace 8 horas'
    // },
    // {
    //   id: 27,
    //   titulo: 'Microbiología General',
    //   materia: 'Biología',
    //   reactivos: 32,
    //   progreso: 57,
    //   fecha: 'Hace 16 horas'
    // },
    // {
    //   id: 28,
    //   titulo: 'Óptica y Ondas',
    //   materia: 'Física',
    //   reactivos: 40,
    //   progreso: 73,
    //   fecha: 'Hace 13 horas'
    // },
    // {
    //   id: 29,
    //   titulo: 'Historia Contemporánea',
    //   materia: 'Historia',
    //   reactivos: 20,
    //   progreso: 38,
    //   fecha: 'Hace 4 días'
    // },
    // {
    //   id: 30,
    //   titulo: 'Química Ambiental',
    //   materia: 'Química',
    //   reactivos: 25,
    //   progreso: 50,
    //   fecha: 'Hace 5 horas'
    // }
  ]
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
</script>
