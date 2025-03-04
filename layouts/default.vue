# Main layout (e.g., includes Header and Footer)

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1 container mx-auto p-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>