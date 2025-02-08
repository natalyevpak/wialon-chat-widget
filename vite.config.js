import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.NODE_ENV': '"production"', // Заменяем `process.env.NODE_ENV` на строку "production"
  },
  build: {
    lib: {
      entry: 'src/main.js', // Точка входа для сборки
      name: 'WialonChatWidget',
      fileName: (format) => `wialon-chat-widget.${format}.js`, // Формат имени итогового файла
      formats: ['umd'], // Формат сборки (UMD для использования через <script>)
    },
    cssCodeSplit: true, 
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue', // Указываем Vue как глобальную переменную
        },
        assetFileNames: 'wialon-chat-widget.css', // Указываем имя для файла стилей (если он нужен)
      },
    },
  },
});
