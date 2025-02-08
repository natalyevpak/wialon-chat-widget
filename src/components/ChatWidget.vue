<template>
    <div class="chat-container">
      <!-- Кнопка для открытия чата -->
      <Button label="Help Chat" severity="primary" rounded @click="toggleChat" class="chat-button" />
  
      <!-- Окно чата -->
      <div v-if="isOpen" class="chat-box">
        <div class="chat-header">
          <span>Chat</span>
          <Button icon="pi pi-times" severity="danger" text rounded @click="toggleChat" />
        </div>
        <div class="chat-body">
          <p>Welcome to the chat!</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Button from 'primevue/button';
  
  const isOpen = ref(false);
  
  const toggleChat = () => {
    isOpen.value = !isOpen.value;
  };
  </script>
  
 

<style>
  @import '../assets/chat-widget.css'; 
</style>
