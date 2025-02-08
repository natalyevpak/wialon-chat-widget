import './assets/main.css';  // Подключаем main.css
import './assets/base.css';   // Подключаем base.css
import './assets/chat-widget.css';   // Подключаем base.css


import { createApp } from 'vue';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';

// Customizing the Aura theme (changing primary color to blue)
const CustomAura = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        }
    }
});

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: CustomAura
    }
});

// Монтируем Vue-приложение в контейнер, переданный в options.container
window.WialonChatWidget = {
    init: function (options) {
        console.log("Инициализация виджета", options);
        const appInstance = createApp(App);
        appInstance.use(PrimeVue, {
            theme: {
                preset: CustomAura
            }
        });

        // Монтируем приложение в контейнер, переданный в options
        appInstance.mount(options.container);
    }
};
