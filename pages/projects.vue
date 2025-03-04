<template>
    <section class="min-h-screen flex flex-col items-center justify-center bg-background text-secondary px-6">
      <div class="max-w-3xl text-center">
        <h1 class="text-4xl font-bold text-primary mb-6">My Projects</h1>
  
        <!-- Project 1 -->
        <div class="bg-secondary text-white p-6 mb-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-semibold mb-2">Project Title 1</h2>
          <p class="text-lg mb-4">A brief description of this project. It's built using Vue.js, Tailwind CSS, and integrates an external API.</p>
          <a
            href="https://github.com/yourusername/project1" 
            target="_blank" 
            class="inline-block bg-primary text-background py-2 px-4 rounded-md hover:bg-opacity-80"
          >
            View on GitHub
          </a>
        </div>
  
        <!-- Project 2 -->
        <div class="bg-secondary text-white p-6 mb-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-semibold mb-2">Project Title 2</h2>
          <p class="text-lg mb-4">A brief description of this project. This project focuses on using Nuxt.js for static site generation with dynamic content.</p>
          <a
            href="https://github.com/yourusername/project2" 
            target="_blank" 
            class="inline-block bg-primary text-background py-2 px-4 rounded-md hover:bg-opacity-80"
          >
            View on GitHub
          </a>
        </div>
  
        <!-- Add more projects as needed -->
  
      </div>
    </section>
  </template>
  
  <script setup>
  useHead({
    title: "Projects - My CV"
  });
  </script>
  
  <style scoped>
  /* Custom styles for the project cards, if needed */
  </style>
  