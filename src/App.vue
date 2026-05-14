<template>
  <div class="container">
    <h1>Chihuahua Lovers</h1>

    <img
      src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
      alt="Chihuahua"
      class="dog-image"
    />

    <p>
      Los chihuahuas son perros pequeños, valientes y muy cariñosos.
      Aunque son diminutos, tienen una personalidad enorme.
    </p>

    <button @click="changeMessage">
      {{ buttonText }}
    </button>

    <h2>{{ message }}</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('¡Los chihuahuas son adorables!')
const buttonText = ref('Cambiar mensaje')

const phrases = [
  '¡Los chihuahuas son adorables!',
  'Pequeños pero muy valientes.',
  'Perfectos para compañía.',
  'Siempre llenos de energía.',
  'Les encanta recibir atención.'
]

function changeMessage() {
  const random =
    phrases[Math.floor(Math.random() * phrases.length)]

  message.value = random
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #fff7f0;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  text-align: center;
}

h1 {
  color: #d97706;
  font-size: 3rem;
}

.dog-image {
  width: 350px;
  max-width: 90%;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

p {
  max-width: 600px;
  font-size: 1.1rem;
  color: #444;
}

button {
  padding: 14px 24px;
  border: none;
  border-radius: 12px;
  background: #f59e0b;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #d97706;
}

h2 {
  color: #92400e;
}
</style>