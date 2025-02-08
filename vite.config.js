import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.NODE_ENV': '"production"', 
  },
  build: {
    lib: {
      entry: 'src/main.js', // Точка входа для сборки
      name: 'WialonChatWidget',
      fileName: (format) => `wialon-chat-widget.${format}.js`, // Формат имени итогового файла
      formats: ['umd'], // Формат сборки (UMD для использования через <script>)
    },
    cssCodeSplit: true,  // Разделение стилей по файлам
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue', // Указываем Vue как глобальную переменную
        },
        assetFileNames: 'wialon-chat-widget.css', // Генерация файла для стилей, если это необходимо
        intro: `
          window.WialonChatWidget = {
            init: function(options) {
              console.log("Инициализация виджета", options);
              const appInstance = createApp(App);
              appInstance.use(PrimeVue, {
                theme: { preset: CustomAura }
              });
              appInstance.mount(options.container);
            }
          };
          window.WialonChatWidget.init({ container: '#wialon-chat-container' });
        `, // Автоматическая инициализация виджета при загрузке
      },
    },
  },
});
