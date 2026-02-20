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
    </div>
    <!-- Card -->
    <div class="relative z-10 w-full max-w-md px-6">
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
.glass-card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
}
</style>
