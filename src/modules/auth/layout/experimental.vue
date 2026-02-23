<script setup>
defineProps({
  enabled: {
    type: Boolean,
    default: true,
  },
  dark: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div
    v-if="enabled"
    class="background-wrapper pointer-events-none fixed inset-0 -z-10"
    :class="{ light: !dark }"
  >
    <div class="mesh-base"></div>
    <div class="mesh-glow mesh-glow-primary"></div>
    <div class="mesh-glow mesh-glow-secondary"></div>
  </div>
</template>

<style scoped>
/* ========================= */
/* DARK MODE — EXACTO       */
/* ========================= */

.mesh-base {
  position: absolute;
  inset: 0;

  background-color: #020617;

  background-image:
    radial-gradient(at 0% 0%, hsla(220, 100%, 15%, 1) 0, transparent 50%),
    radial-gradient(at 100% 0%, hsla(20, 90%, 35%, 1) 0, transparent 50%),
    radial-gradient(at 100% 100%, hsla(210, 100%, 45%, 1) 0, transparent 50%),
    radial-gradient(at 0% 100%, hsla(230, 100%, 10%, 1) 0, transparent 50%);

  transition: all 0.5s ease;
}

/* ========================= */
/* LIGHT MODE — EXACTO      */
/* ========================= */

.light .mesh-base {
  background-color: #f1f5f9;

  background-image:
    radial-gradient(at 0% 0%, hsla(220, 50%, 90%, 1) 0, transparent 50%),
    radial-gradient(at 100% 0%, hsla(20, 80%, 90%, 1) 0, transparent 50%),
    radial-gradient(at 100% 100%, hsla(210, 60%, 85%, 1) 0, transparent 50%);
}

/* ========================= */
/* GLOWS EXACTOS            */
/* ========================= */

.mesh-glow {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
}

/* Azul inferior */
.mesh-glow-primary {
  width: 320px;
  height: 320px;
  background: rgba(30, 64, 175, 0.2); /* #1e40af */
  bottom: -80px;
  left: -80px;
  filter: blur(100px);
}

/* Naranja lateral */
.mesh-glow-secondary {
  width: 260px;
  height: 260px;
  background: rgba(245, 158, 11, 0.1); /* #f59e0b */
  top: 25%;
  right: -80px;
  filter: blur(80px);
}
</style>
